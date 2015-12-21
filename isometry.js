/* jshint esnext: true */
(function() {
    "use strict";
    window.onload = function() {
        console.log("Isometry.js loaded!");

        let canvas = document.getElementById("panel");
        let ctx = canvas.getContext("2d");

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        let BLOCK_SIZE = 50;

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
        }

        function makeBuilding() {
            makeBlock(200, 300);
        }

        function makeGrid() {
            makeBuilding();
        }

        makeGrid();
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
