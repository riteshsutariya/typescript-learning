function doSomething(pair) {
    console.log(pair);
}
doSomething(["India", 3]);
function setCoordinates(coord) {
    var x = coord[0], y = coord[1], z = coord[2];
    if (typeof z === "undefined") {
        console.log("2D");
        console.log(x, y);
    }
    else {
        console.log("3D");
        console.log(x, y, z);
    }
}
setCoordinates([2, 3, 4]);
setCoordinates([2, 34]);
var countryList = {
    list: [
        ["India", 13578069, 0.67, 1.34],
        ["Germany", 123456, 0.87, 1.45],
        ["Italy", 986565, 0.77, 1.25],
    ]
};
console.log(countryList);
