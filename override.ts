class Base {
  greet() {
    console.log("Hello World!");
  }
}

class Derived extends Base {
  greet(name?: string): void {
    if (name === undefined) {
      super.greet();
    } else {
      console.log(`Hello ${name}`);
    }
  }
}
const Obj: Derived = new Derived();
Obj.greet();
Obj.greet("Ritesh Sutariya");

const Obj1: Base = new Derived();
Obj1.greet();

class Base1 {
  name = "base";
  constructor() {
    console.log("My name is " + this.name);
  }
}
class Derived1 extends Base1 {
  name = "derived";
}
// Prints "base", not "derived"
const d: Base1 = new Derived1();
console.log(d.name);
export {};
