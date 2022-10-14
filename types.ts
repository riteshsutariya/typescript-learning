//primitive types: number,string,boolean can decalre using let(to declare block-scoped variables), var(to declare functional scoped varibale) and const(to declare constants)

//string
let str: string = "this is string";
console.log(str);
//str = 789; ts will throw error as we can't assign number to string type variable
str = "789";
console.log(str);

//number
let num: number = 567;
console.log(num);
// num='345.67'; ts will throw error as we can't assign string to number type variable
num = 345.67;
console.log(num);

//boolean
let isMale: boolean = true;
console.log(isMale);
//isMale='345.67'; ts will throw error as we can't assign string to boolean type variable
isMale = false;
console.log(isMale);

export {};
