interface IPerson {
  first_name: string;
  last_name: string;
  age: number;
  gender: string;
}
const personObj: IPerson = {
  first_name: "John",
  last_name: "Doe",
  age: 32,
  gender: "male",
};
console.log(
  `Hello, ${personObj.first_name} ${personObj.last_name}. As per information given to us you are ${personObj.age} years ols.`
);
export {};
