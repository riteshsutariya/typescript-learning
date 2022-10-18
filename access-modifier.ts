//public
class PBase {
  public x = 12;
  public printX() {
    console.log(this.x);
  }
}
const obj1 = new PBase();
console.log(obj1.x); //12
obj1.printX();

//private
class Base {
  private x = 0;
  public printX() {
    console.log(this.x);
  }
}

const obj2 = new Base();
//console.log(obj.x);   //ts will give error x property is private
obj2.printX();

//protected
class PRBase {
  protected x = 34;
  public printX() {
    console.log("PRBase.x= ", this.x);
  }
}

class PRDerived extends PRBase {
  private y = 45;
  public sum(): number {
    return super.x + this.y;
  }
}
const obj3 = new PRBase();
// console.log(obj3.x); //ts will give error as we can't access protected member outside class and inherited class
obj3.printX();

const obj4 = new PRDerived();
obj4.sum();

export {};
