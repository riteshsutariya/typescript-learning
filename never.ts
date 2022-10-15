function printArray(arr: any[]): never {
  arr.forEach((item, index) => {
    console.log(`element at ${index} is ${item}`);
  });
  throw new Error("Error 568");
}
try {
  printArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
} catch (error) {
  console.error(error.message);
}
export {};
