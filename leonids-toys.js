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
    price: 20.0,
    weight: 10, //oz
    dimensions: [12, 12, 3], //[length, width, height] inches
    franchise: "none",
    character: "n/a",
    material: "wood",
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
    price: 15.0,
    weight: 6, //oz
    dimensions: [12, 6, 3], //[length, width, height] inches
    franchise: "none",
    character: "n/a",
    material: "cardboard",
    battery: false,
  },
];


for (toy of toys) {
  console.log(toy.name);
};