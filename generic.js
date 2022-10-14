var strArr = ["element1", "element2", "element3", "element4"];
var printArrayElements = function (arr) {
    arr.forEach(function (item, index) {
        console.log("element at ".concat(index), item);
    });
};
printArrayElements(strArr);
var numArr = [1, 2, 3, 4, 5, 6, 7];
printArrayElements(numArr);
var objArr = [
    { name: "virat" },
    { name: "rohit" },
    { name: "surya" },
    { name: "rishabh" },
];
printArrayElements(objArr);
