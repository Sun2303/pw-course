const str = "Playwright";
const arr = [1, 2, 3, 4, 3, 55, 23, 3];
const dupArr = [1, 2, 3, 1, 2, 4, 5];

// 2.1
for (let char of str) {
    console.log(char);
}

// 2.2
let reverseStr = [];
for (let char of str) {
    reverseStr.unshift(char);
}

console.log(reverseStr);

// 2.3
let firstIndex = -1;
let lastIndex = -1;
let index = 0;

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 3) {
//         if (firstIndex === -1) {
//             firstIndex = i;
//         }
//         lastIndex = i;
//     }
// }

for (let value of arr) {
    if (value === 3) {
        if (firstIndex === -1) {
            firstIndex = index;
        }
        lastIndex = index;
    }
    index++;
}

console.log("Vị trí đầu:", firstIndex);
console.log("Vị trí cuối:", lastIndex);


// 2.4
const count = {};
const uniqueValue = [];

//Count the number of elements that appear only once
for (let value of dupArr) {
    count[value] = (count[value] || 0) + 1;
}
for (let value of dupArr) {
    if (count[value] === 1) {
        uniqueValue.push(value);
    }
}

console.log(uniqueValue);



