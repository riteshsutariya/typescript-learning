function printCoord(pt: { x: number; y: number }) {
  console.log(`the coordinator's x values is ${pt.x} and y value is ${pt.y}`);
}
printCoord({ x: 45, y: 78 });

//optional properties
const printName = (obj: { first: string; last?: string }) => {
  if (typeof obj.last !== "undefined") {
    console.log(`fullname: ${obj.first} ${obj.last}`);
  } else {
    console.log(`first name: ${obj.first}`);
  }
};

printName({ first: "ritesh", last: "sutariya" });
printName({ first: "ritesh" });
export {};
