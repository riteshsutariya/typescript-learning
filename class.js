"use strict";
exports.__esModule = true;
//class with one readonly property and one method
var Point = /** @class */ (function () {
    function Point() {
        this.z = "default";
    }
    Point.prototype.scale = function (n) {
        this.x *= n;
        this.y *= n;
    };
    return Point;
}());
var pt = new Point();
pt.x = 12;
pt.y = 45;
//pt.z='Assign'  //ts will throw error can't assign value to readonly property
console.log(pt);
pt.scale(2);
console.log(pt);
//class with constructroctor
var GoodGeeter = /** @class */ (function () {
    function GoodGeeter() {
        this.name = "Hello";
    }
    return GoodGeeter;
}());
var gObj = new GoodGeeter();
console.log(gObj.name);
gObj.name = "Shayonara";
console.log(gObj.name);
