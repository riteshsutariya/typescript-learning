const someClass = class<Type> {
  content: Type;
  constructor(value: Type) {
    this.content = value;
  }
};

const m = new someClass("Hello World");
console.log(m);

abstract class Base {
  abstract getName(): string;
  printName() {
    console.log(`Hello ` + this.getName());
  }
}

class Derived extends Base {
  getName() {
    return "Universe";
  }
}

const d = new Derived();
d.printName();
export {};
