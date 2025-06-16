const myHeight = 165; //unit: cm
const oddHeight = myHeight % 100;

const idealWeight = oddHeight * 9 / 10;
const maxWeight = oddHeight; // unit: kg
const minWeight = oddHeight * 8 / 10;

console.log("My ideal weight: " + idealWeight + " kg, " + "my maximum weight: " + maxWeight + " kg, " + "and my minimum weight: " + minWeight + " kg");