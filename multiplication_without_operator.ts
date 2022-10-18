//addition of two numbers without using + operator
let n1: number = 9695;
let n2: number = 895;
let result: number;
result = 0;

//method 1
for (let index = 0; index < n1; index++) {
  result += n2;
}
console.log("multiplication: ", result);
export {};
