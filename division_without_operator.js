var n1 = 888;
var n2 = 11;
var result = 0;
while (n1 > 0 && n1 > n2) {
    result++;
    n1 -= n2;
}
console.log("result:", result);
