const scores = [85, 90, 78];
const ages = [18, 21, 16, 25];
const words = ["apple", "banana", "cherry", "date"];
const numbers = [1, 2, 3, 4];
const expenses = [50, 100, 150];

// 1
const sumScores = scores.reduce((total, num) => total + num, 0)
console.log(sumScores);

// 2
const result = numbers.reduce((result, num) => result * num, 1)
console.log(result);

// 3
const sumExpenses = expenses.reduce((expense, num) => expense + num, 0);
console.log(sumExpenses);