const scores = [85, 90, 78];
const ages = [18, 21, 16, 25];
const words = ["apple", "banana", "cherry", "date"];
const numbers = [1, 2, 3, 4];
const expenses = [50, 100, 150];

// 1
const newScores = scores.map(score => {
    if (score >= 90) {
        return score - score * 0.05;
    } else {
        return score + score * 0.1;
    }
});
console.log(newScores);

// 2
const covertNumberToStringArr = numbers.map(number => number.toString());
console.log(covertNumberToStringArr);

// 3
const doubleNumbers = numbers.map(number => number * 2);
console.log(doubleNumbers);