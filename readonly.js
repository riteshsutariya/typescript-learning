function doSomething(obj) {
    console.log("prop has the value: ".concat(obj.property));
    //   obj.property = "Bob"; // ts will give error cannot assign value to readonly property
}
doSomething({ property: "ICC T20 World Cup 2022" });
