/* jshint esnext: true */
(function() {
    "use strict";
    window.onload = function() {
        console.log("Isometry.js loaded!");

        let canvas = document.getElementById("panel");
        let ctx = canvas.getContext("2d");

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        function makeBlock() {

        }

        function makeBuilding() {

        }

        function makeGrid() {
            ctx.beginPath();
            ctx.moveTo(200, 200);
            ctx.lineTo(300, 150);
            ctx.stroke();
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
