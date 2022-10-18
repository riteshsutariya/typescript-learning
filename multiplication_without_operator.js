"use strict";
exports.__esModule = true;
//addition of two numbers without using + operator
var n1 = 9695;
var n2 = 895;
var result;
result = 0;
//method 1
for (var index = 0; index < n1; index++) {
    result += n2;
}
console.log("multiplication: ", result);
