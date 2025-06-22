const scores = [85, 90, 78];
const ages = [18, 21, 16, 25];
const words = ["apple", "banana", "cherry", "date"];
const numbers = [1, 2, 3, 4];
const expenses = [50, 100, 150];

// 1
const isAnyScoreAbove80 = scores.some(score => score > 80);
console.log(isAnyScoreAbove80);

// 2
const isAnyAgeBelow18 = ages.some(age => age < 18);
console.log(isAnyAgeBelow18);

// 3
const isAnyWordLengthAbove5 = words.some(word => word.length > 5);
console.log(isAnyWordLengthAbove5);