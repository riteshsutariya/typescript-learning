function sum(a: string, b: string): string;
function sum(a: number, b: number): number;
function sum(a: any, b: any): any {
  return a + b;
}
console.log(sum(23, 34));

console.log(sum("23", "34"));

function len(s: string): number;
function len(arr: any[]): number;
function len(x: any) {
  return x.length;
}
console.log(len("this is string"));
console.log(len([1, 2, 3, 4, 5, 6, 7, 8]));
