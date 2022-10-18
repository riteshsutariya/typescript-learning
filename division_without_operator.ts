let n1: number = 888;
let n2: number = 11;

let result: number = 0;

while (n1 > 0 && n1 > n2) {
  result++;
  n1 -= n2;
}

console.log("result:", result);
