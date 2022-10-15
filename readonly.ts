interface SomeType {
  readonly property: string;
}
function doSomething(obj: SomeType) {
  console.log(`prop has the value: ${obj.property}`);
  //   obj.property = "Bob"; // ts will give error cannot assign value to readonly property
}
doSomething({ property: "ICC T20 World Cup 2022" });
