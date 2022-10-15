const multiply = (n: number, ...m: number[]) => {
  return m.map((x) => x * n);
};
console.log(multiply(15, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
console.log(multiply(16, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
console.log(multiply(17, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
console.log(multiply(18, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
console.log(multiply(19, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
console.log(multiply(20, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
