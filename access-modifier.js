"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
//public
var PBase = /** @class */ (function () {
    function PBase() {
        this.x = 12;
    }
    PBase.prototype.printX = function () {
        console.log(this.x);
    };
    return PBase;
}());
var obj1 = new PBase();
console.log(obj1.x); //12
obj1.printX();
//private
var Base = /** @class */ (function () {
    function Base() {
        this.x = 0;
    }
    Base.prototype.printX = function () {
        console.log(this.x);
    };
    return Base;
}());
var obj2 = new Base();
//console.log(obj.x);   //ts will give error x property is private
obj2.printX();
//protected
var PRBase = /** @class */ (function () {
    function PRBase() {
        this.x = 34;
    }
    PRBase.prototype.printX = function () {
        console.log("PRBase.x= ", this.x);
    };
    return PRBase;
}());
var PRDerived = /** @class */ (function (_super) {
    __extends(PRDerived, _super);
    function PRDerived() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.y = 45;
        return _this;
    }
    PRDerived.prototype.sum = function () {
        return _super.prototype.x + this.y;
    };
    return PRDerived;
}(PRBase));
var obj3 = new PRBase();
// console.log(obj3.x); //ts will give error as we can't access protected member outside class and inherited class
obj3.printX();
var obj4 = new PRDerived();
obj4.sum();
