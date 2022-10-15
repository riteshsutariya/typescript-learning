var multiply = function (n) {
    var m = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        m[_i - 1] = arguments[_i];
    }
    return m.map(function (x) { return x * n; });
};
console.log(multiply(15, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
console.log(multiply(16, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
console.log(multiply(17, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
console.log(multiply(18, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
console.log(multiply(19, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
console.log(multiply(20, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
