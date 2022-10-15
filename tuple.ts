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

type countryPerformance = [string, number, number, number];
//name,population,HDI,PPP
interface country<Type> {
  list: Type[];
}

const countryList: country<countryPerformance> = {
  list: [
    ["India", 13578069, 0.67, 1.34],
    ["Germany", 123456, 0.87, 1.45],
    ["Italy", 986565, 0.77, 1.25],
  ],
};

console.log(countryList);
