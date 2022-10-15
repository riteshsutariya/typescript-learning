interface CoulourFul {
  color: string;
}
interface Circle {
  radius: number;
}

interface ColourFulCircle extends CoulourFul, Circle {}

const cc1: ColourFulCircle = {
  color: "Green",
  radius: 34.56,
};

const cc2: Circle = {
  radius: 4.56,
};

const color: CoulourFul = {
  color: "Red",
};
console.log(cc1);
console.log(cc2);
console.log(color);
export {};
