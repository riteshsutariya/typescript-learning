//class with one readonly property and one method
class Point {
  x: number;
  y: number;
  readonly z: string = "default";
  scale(n: number) {
    this.x *= n;
    this.y *= n;
  }
}
const pt = new Point();
pt.x = 12;
pt.y = 45;
//pt.z='Assign'  //ts will throw error can't assign value to readonly property
console.log(pt);
pt.scale(2);
console.log(pt);

//class with constructroctor
class GoodGeeter {
  name: string;
  constructor() {
    this.name = "Hello";
  }
}

const gObj = new GoodGeeter();
console.log(gObj.name);
gObj.name = "Shayonara";
console.log(gObj.name);

//class with getter and setter only available when targeting ECMAscript 5
// class C {
//   _length = 0;
//   get length() {
//     return this._length;
//   }
//   set length(value) {
//     this._length = value;
//   }
// }

// const cObj: C = new C();
// cObj._length = 45;
// console.log(cObj);
export {};
