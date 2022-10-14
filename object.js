function printCoord(pt) {
    console.log("the coordinator's x values is ".concat(pt.x, " and y value is ").concat(pt.y));
}
printCoord({ x: 45, y: 78 });
//optional properties
var printName = function (obj) {
    if (typeof obj.last !== "undefined") {
        console.log("fullname: ".concat(obj.first, " ").concat(obj.last));
    }
    else {
        console.log("first name: ".concat(obj.first));
    }
};
printName({ first: "ritesh", last: "sutariya" });
printName({ first: "ritesh" });
