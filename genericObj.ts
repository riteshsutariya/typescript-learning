interface Box<Type> {
  contents: Type;
}

interface Soldier {
  name: string;
  rank: string;
  country: string;
  medals: string[];
}

const obj1: Box<string> = {
  contents: "Hello",
};
console.log(obj1);

const obj2: Box<number> = {
  contents: 34,
};
console.log(obj2);

const obj3: Box<number[]> = {
  contents: [34, 56, 78, 5, 63],
};
console.log(obj3);

const obj4: Box<Soldier> = {
  contents: {
    name: "Pawan Kumar",
    rank: "Major",
    country: "India",
    medals: ["Vishisth Seva Medal", "Shourya Chakra", "Yudhh Medla"],
  },
};

console.log(obj4);
