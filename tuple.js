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
