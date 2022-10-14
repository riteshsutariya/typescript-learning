type StringArray = Array<string>;
type NumberArray = Array<number>;
type objectWithNameArray = Array<{ name: string }>;

const strArr: StringArray = ["element1", "element2", "element3", "element4"];

const printArrayElements = (arr: any[]) => {
  arr.forEach((item, index) => {
    console.log(`element at ${index}`, item);
  });
};

printArrayElements(strArr);

const numArr: NumberArray = [1, 2, 3, 4, 5, 6, 7];

printArrayElements(numArr);

const objArr: objectWithNameArray = [
  { name: "virat" },
  { name: "rohit" },
  { name: "surya" },
  { name: "rishabh" },
];

printArrayElements(objArr);
