//decalring type of input parameter
function greet(name: string) {
  console.log(`Hello, ${name.toUpperCase()}!!`);
}

greet("Ritesh Sutariya");
// greet(45); ts will throw error as we can't pas number to argument of type string

//declaring type of output parameter
function getLenght(line: string): number {
  return line.split(" ").length;
}
const num: number =
  getLenght(`Much like variable type annotations, you usually don't need a return type annotation because
TypeScript will infer the function's return type based on its return statements. The type
annotation in the above example doesn't change anything. Some codebases will explicitly specify a
return type for documentation purposes, to prevent accidental changes, or just for personal
preference.`);
console.log("total words in line: ", num);

//anonymous functions
const names = ["Alice", "Bob", "Mark"];
names.forEach((name) => console.log(name.toUpperCase()));
export {};
