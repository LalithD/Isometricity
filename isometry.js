/* jshint esnext: true */
(function() {
    "use strict";
    window.onload = function() {
        console.log("Isometry.js loaded!");
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
