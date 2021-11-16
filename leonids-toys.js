const toys = [
  {
    id: 1,
    upc: 2425323324,
    barcode: "234-cgrw-0001",
    name: "Wooden Blocks",
    ageRange: [0, 100],
    category: "blocks",
    gender: "all",
    brand: "noBrand",
    numOfPlayers: 1,
    price: 5.0,
    weight: 5, //oz
    dimensions: [12, 5, 6], // [length, width, height] inches
    franchise: "none",
    character: "n/a",
    material: "wood",
    battery: false,
  },
  {
    id: 2,
    upc: 2425323325,
    barcode: "234-cgrw-0002",
    name: "Wooden Chess Set",
    ageRange: [5, 100],
    category: "games",
    gender: "all",
    brand: "noBrand",
    numOfPlayers: 2,
    price: 20.0,
    weight: 10, //oz
    dimensions: [12, 12, 3], //[length, width, height] inches
    franchise: "none",
    character: "n/a",
    material: ["wood"],
    battery: false,
  },
  {
    id: 3,
    upc: 2425323326,
    barcode: "234-cgrw-0003",
    name: "Cat Lover's Jigsaw Puzzle",
    ageRange: [5, 100],
    category: "puzzles",
    gender: "all",
    brand: "Ridley's",
    numOfPlayers: 1,
    price: 15.0,
    weight: 6, //oz
    dimensions: [12, 6, 3], //[length, width, height] inches
    franchise: "none",
    character: "n/a",
    material: ["cardboard"],
    battery: false,
  },
];

const rubiksCube = {
  id: 4,
  upc: 630509932818,
  barcode: "234-cgrw-0004",
  name: "Rubik's Cube",
  ageRange: [8, 100],
  category: "puzzles",
  gender: "all",
  brand: "Hasbro",
  numOfPlayers: 1,
  price: 10.99,
  weight: 6, //oz
  dimensions: [3, 3, 3], //[length, width, height] inches
  franchise: "none",
  character: "n/a",
  material: ["plastic"],
  battery: false,
};

const giantGiraffe = {
  id: 5,
  upc: 490860221248,
  barcode: "234-cgrw-0007",
  name: "Melissa & Doug Giant Giraffe - Lifelike Stuffed Animal",
  ageRange: [3, 100],
  category: "stuffed animals",
  gender: "all",
  brand: "Hasbro",
  numOfPlayers: 1,
  price: 10.99,
  weight: 128, //oz
  dimensions: [10.5, 21.2, 57.5], //[length, width, height] inches
  franchise: "none",
  character: "n/a",
  material: ["metal", "plastic", "polyester"],
  battery: false,
};

toys.push(rubiksCube);
toys.push(giantGiraffe);

for (toy of toys) {
  console.log(toy.name);
}
