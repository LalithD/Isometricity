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
        const BLOCK_SIZE = 60; // size of each block
        const MAX_HEIGHT = 10; // max height of each block
        const GRID_SIZE = 12; // size of grid (in blocks)
        const BELOW_TOP = 120; // top of beginning block is 120 below

        function makeBlock(x, y) {

        }

        function makeBuilding(x, y, height) {
            for (let i = 0; i < height; i++) {
                makeBlock(x, y - i * BLOCK_SIZE);
            }
        }

        function makeGrid(xSize, ySize, height) {
            let cityArray = makeRandArray(xSize, ySize, height);
            let initX = canvas.width/2;
            let initY = BELOW_TOP;
            for (let i = 0; i < cityArray.length; i++) {
                for (let j = 0; j < cityArray[i].length; j++) {
                    let xChange = (j - i) * BLOCK_SIZE * Math.sqrt(3)/2;
                    let yChange = (i + j) * BLOCK_SIZE / 4;
                    makeBuilding(initX + xChange, initY + yChange, cityArray[i][j]);
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
