const toys = [
  {
    id: 1,
    inStock: true,
    upc: 2425323324,
    name: "Wooden Blocks",
    ageRange: [0, 100],
    category: "blocks",
    brand: "Mattel",
    price: 5.0,
    franchise: null,
    battery: false,
  },
  {
    id: 2,
    inStock: false,
    upc: 2425323325,
    name: "Wooden Chess Set",
    ageRange: [5, 100],
    category: "games",
    brand: "Chess Master",
    price: 20.0,
    franchise: null,
    battery: false,
  },
  {
    id: 3,
    inStock: true,
    upc: 2425323326,
    name: "Cat Lover's Jigsaw Puzzle",
    ageRange: [5, 100],
    category: "puzzles",
    brand: "Ridley's",
    price: 15.0,
    franchise: null,
    battery: false,
  },
];

const rubiksCube = {
  id: 4,
  inStock: true,
  upc: 630509932818,
  name: "Rubik's Cube",
  ageRange: [8, 100],
  category: "puzzles",
  gender: "all",
  brand: "Hasbro",
  price: 10.99,
  franchise: null,
  battery: false,
};

const giantGiraffe = {
  id: 5,
  inStock: false,
  upc: 490860221248,
  name: "Melissa & Doug Giant Giraffe - Lifelike Stuffed Animal",
  ageRange: [3, 100],
  category: "stuffed animals",
  brand: "Hasbro",
  price: 10.99,
  franchise: null,
  battery: false,
};

toys.push(rubiksCube);
toys.push(giantGiraffe);

// for (const toy of toys) {
//   console.log(`The ${toy.name} by ${toy.brand} is $${toy.price}`);
// }

// for (const toy of toys) {
//   toy.price *= 1.05;
//   console.log(`The ${toy.name} costs $${toy.price}`);
// }

const toyToFind = 2;

// for (const toy of toys) {
//   if (toy.id === toyToFind) {
//     console.log(toy.name, toy);
//   }
// }

function addToyToInventory(toyObject) {
  const maxId = toys[toys.length - 1].id;
  const id = maxId + 1;

  toyObject.id = id;

  toys.push(toyObject);
}

const uno = {
  inStock: false,
  upc: 887961219722,
  name: "UNO Card Game - Retro Edition",
  ageRange: [7, 100],
  category: "games",
  brand: "Mattel",
  price: 5.99,
  franchise: null,
  battery: false,
}

addToyToInventory(uno);
const toyNames = []
toys.forEach(toy => toyNames.push(toy.name))
console.log(toyNames)


