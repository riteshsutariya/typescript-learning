"use strict";
exports.__esModule = true;
function printArray(arr) {
    arr.forEach(function (item, index) {
        console.log("element at ".concat(index, " is ").concat(item));
    });
    throw new Error("Error 568");
}
try {
    printArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
}
catch (error) {
    console.error(error.message);
}
