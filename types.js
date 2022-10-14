"use strict";
//primitive ones: number,string,boolean
exports.__esModule = true;
//string
var str = "this is string";
console.log(str);
//str = 789; ts will throw error as we can't assign number to string type variable
str = "789";
console.log(str);
//number
var num = 567;
console.log(num);
// num='345.67'; ts will throw error as we can't assign string to number type variable
num = 345.67;
console.log(num);
//boolean
var isMale = true;
console.log(isMale);
isMale = false;
console.log(isMale);
