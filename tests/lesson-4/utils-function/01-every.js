const scores = [85, 90, 78];
const ages = [18, 21, 16, 25];
const words = ["apple", "banana", "cherry", "date"];
const numbers = [1, 2, 3, 4];
const expenses = [50, 100, 150];

// 1
const isAllScoreAbove70 = scores.every(score => score > 70);
console.log(isAllScoreAbove70);

// 2
const isAllAgesAbove15 = ages.every(age => age > 15);
console.log(isAllAgesAbove15);

// 3
const isAllWordLengthAbove3 = words.every(word => word.length > 3);
console.log(isAllWordLengthAbove3);