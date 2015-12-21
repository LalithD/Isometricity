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
        const BLOCK_SIZE = 20; // size of each block
        const MAX_HEIGHT = 15; // max height of each block
        const GRID_SIZE = 50; // size of grid (in blocks)

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

            let lightProbability = 0.2;

            if(Math.random() < lightProbability) {
                drawWindowLeft(x - xChange/9, y + BLOCK_SIZE / 9);
            } if(Math.random() < lightProbability) {
                drawWindowLeft(x - xChange/9, y + 11/18 * BLOCK_SIZE);
            } if(Math.random() < lightProbability) {
                drawWindowLeft(x - xChange/9 - xChange/2, y + BLOCK_SIZE / 9 - yChange/2);
            } if(Math.random() < lightProbability) {
                drawWindowLeft(x - xChange/9 - xChange/2, y + 11/18 * BLOCK_SIZE - yChange/2);
            }

            if(Math.random() < lightProbability) {
                drawWindowRight(x + xChange/9, y + BLOCK_SIZE / 9);
            } if(Math.random() < lightProbability) {
                drawWindowRight(x + xChange/9, y + 11/18 * BLOCK_SIZE);
            } if(Math.random() < lightProbability) {
                drawWindowRight(x + xChange/9 + xChange/2, y + BLOCK_SIZE / 9 - yChange/2);
            } if(Math.random() < lightProbability) {
                drawWindowRight(x + xChange/9 + xChange/2, y + 11/18 * BLOCK_SIZE - yChange/2);
            }

        }

        function getWindowColor() {
            return "hsla(" + Math.floor(Math.random()*8 + 52) + ",85%," + Math.floor(Math.random()*5 + 55) + "%," + (Math.floor(Math.random()*10) + 20)/100 + ")";
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
            ctx.fillStyle = getWindowColor();
            ctx.fill();
            ctx.closePath();
        }

        function drawWindowRight(x, y) {
            let windowSize = BLOCK_SIZE / 3;
            let xChange = windowSize * Math.sqrt(3) / 2;
            let yChange = windowSize / 2;

            ctx.beginPath();
            ctx.moveTo(x, y + windowSize);
            ctx.lineTo(x + xChange, y + yChange);
            ctx.lineTo(x + xChange, y - yChange);
            ctx.lineTo(x, y);
            ctx.lineTo(x, y + windowSize);
            ctx.fillStyle = getWindowColor();
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

        let cityArray = makeRandArray(GRID_SIZE, GRID_SIZE, MAX_HEIGHT);
        function animateLights() {
            for (let i = 0; i < cityArray.length; i++) {
                for (let j = 0; j < cityArray[i].length; j++) {
                    let xChange = (j - i) * BLOCK_SIZE * Math.sqrt(3)/2;
                    let yChange = (i + j) * BLOCK_SIZE / 2;
                    makeBuilding(canvas.width/2 + xChange, yChange, cityArray[i][j]);
                }
            }
        }

        /* runtime */
        // var animate = window.setInterval(animateLights, 1000); animate();
        makeGrid(GRID_SIZE, GRID_SIZE, MAX_HEIGHT);
    };

    function makeRandArray(xSize, ySize, height) {
        let cityArray = [];
        for (let i = 0; i < xSize; i++) {
            cityArray[i] = [];
            for (let j = 0; j < ySize; j++) {
                cityArray[i][j] = Math.floor(Math.random() * (height+1));
            }
        }
        console.log(cityArray);
        return cityArray;
    }
})();
