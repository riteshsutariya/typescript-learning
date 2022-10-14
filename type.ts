type Point = {
  x: number;
  y: number;
};

function printCoord(pt: Point) {
  console.log(`the coordinate's x values is ${pt.x} and y's values is ${pt.y}`);
}

printCoord({ x: 45, y: 78 });
