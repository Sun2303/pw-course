const numbers = [1, 2, 3];

// 1.1
numbers.forEach(number => {
    console.log(number);
})

// 1.2
let total = 0;
numbers.forEach(number => {
    total += number;
})
console.log(total);

let max = numbers[0];
let min = numbers[0];
numbers.forEach((number) => {
    if (number < min) {
        min = number;
    }
    if (number > max) {
        max = number;
    }
})
console.log("Minimum number is:", min);
console.log("Maximum number is:", max);

// 1.3
let dupNumber = [];
numbers.map(number => {
    dupNumber.push(number * 2);
});
console.log(dupNumber);


