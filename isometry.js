/* jshint esnext: true */
(function() {
    "use strict";
    window.onload = function() {
        console.log("Isometry.js loaded!");

        let canvas = document.getElementById("panel");
        let ctx = canvas.getContext("2d");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        /* Constants */
        const BLOCK_SIZE = 30; // size of each block
        const MAX_HEIGHT = 10; // max height of each block
        const GRID_SIZE = 40; // size of grid (in blocks)

        function makeBlock(x, y) {
            let xChange = BLOCK_SIZE * Math.sqrt(3) / 2;
            let yChange = BLOCK_SIZE / 2;

            ctx.beginPath();
            ctx.moveTo(x, y + BLOCK_SIZE);
            ctx.lineTo(x + xChange, y + yChange);
            ctx.lineTo(x + xChange, y - yChange);
            ctx.lineTo(x, y);
            ctx.lineTo(x, y + BLOCK_SIZE);
            ctx.fillStyle = "#555";
            ctx.fill();
            ctx.closePath();

            ctx.beginPath();
            ctx.moveTo(x, y + BLOCK_SIZE);
            ctx.lineTo(x - xChange, y + yChange);
            ctx.lineTo(x - xChange, y - yChange);
            ctx.lineTo(x, y);
            ctx.lineTo(x, y + BLOCK_SIZE);
            ctx.fillStyle = "#222";
            ctx.fill();
            ctx.closePath();

            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x + xChange, y - yChange);
            ctx.lineTo(x, y - BLOCK_SIZE);
            ctx.lineTo(x - xChange, y - yChange);
            ctx.lineTo(x, y);
            ctx.fillStyle = "#888";
            ctx.fill();
            ctx.closePath();

            if(Math.random() > 0.5) {
                drawWindowLeft(x - xChange / 9, y + yChange / 9);
            } if(Math.random() > 0.5) {
                drawWindowLeft(x - xChange / 2, y + yChange / 9);
            } if(Math.random() > 0.5) {
                drawWindowLeft(x - xChange / 9, y + yChange / 2);
            } if(Math.random() > 0.5) {
                drawWindowLeft(x - xChange / 2, y + yChange / 2);
            }

        }

        function drawWindowLeft(x, y) {
            let windowSize = BLOCK_SIZE / 3;
            let xChange = windowSize * Math.sqrt(3) / 2;
            let yChange = windowSize / 2;

            ctx.beginPath();
            ctx.moveTo(x, y + windowSize);
            ctx.lineTo(x - xChange, y + yChange);
            ctx.lineTo(x - xChange, y - yChange);
            ctx.lineTo(x, y);
            ctx.lineTo(x, y + windowSize);
            ctx.fillStyle = "#d5e612";
            ctx.fill();
            ctx.closePath();
        }

        function makeBuilding(x, y, height) {
            for (let i = 0; i < height; i++) {
                makeBlock(x, y - i * BLOCK_SIZE);
            }
        }

        function makeGrid(xSize, ySize, height) {
            let cityArray = makeRandArray(xSize, ySize, height);
            for (let i = 0; i < cityArray.length; i++) {
                for (let j = 0; j < cityArray[i].length; j++) {
                    let xChange = (j - i) * BLOCK_SIZE * Math.sqrt(3)/2;
                    let yChange = (i + j) * BLOCK_SIZE / 2;
                    makeBuilding(canvas.width/2 + xChange, yChange, cityArray[i][j]);
                }
            }
        }

        /* runtime */
        makeGrid(GRID_SIZE, GRID_SIZE, MAX_HEIGHT);
    };

    function makeRandArray(xSize, ySize, height) {
        let array = [];
        for (let i = 0; i < xSize; i++) {
            array[i] = [];
            for (let j = 0; j < ySize; j++) {
                array[i][j] = Math.floor(Math.random() * (height+1));
            }
        }
        return array;
    }
})();
