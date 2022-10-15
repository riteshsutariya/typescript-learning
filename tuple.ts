type StringPair = [string, number];

function doSomething(pair: [string, number]) {
  console.log(pair);
}

doSomething(["India", 3]);

type Either2DOr3D = [number, number, number?];

function setCoordinates(coord: Either2DOr3D) {
  const [x, y, z] = coord;
  if (typeof z === "undefined") {
    console.log("2D");
    console.log(x, y);
  } else {
    console.log("3D");
    console.log(x, y, z);
  }
}

setCoordinates([2, 3, 4]);
setCoordinates([2, 34]);
