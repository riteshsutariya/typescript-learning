"use strict";
exports.__esModule = true;
//decalring type of input parameter
function greet(name) {
    console.log("Hello, ".concat(name.toUpperCase(), "!!"));
}
greet("Ritesh Sutariya");
// greet(45); ts will throw error as we can't pas number to argument of type string
//declaring type of output parameter
function getLenght(line) {
    return line.split(" ").length;
}
var num = getLenght("Much like variable type annotations, you usually don't need a return type annotation because\nTypeScript will infer the function's return type based on its return statements. The type\nannotation in the above example doesn't change anything. Some codebases will explicitly specify a\nreturn type for documentation purposes, to prevent accidental changes, or just for personal\npreference.");
console.log("total words in line: ", num);
//anonymous functions
var names = ["Alice", "Bob", "Mark"];
names.forEach(function (name) { return console.log(name.toUpperCase()); });
