const student = {
    "name": "Alex",
    "age": 10,
    "salary": 20
}

// 3.1
for (let key in student) {
    console.log(key);
    console.log(student[key]);
}

// 3.2
let totalNumber = 0;
for (let key in student) {
    if (typeof student[key] === "number") {
        totalNumber += student[key];
    }
}
console.log(totalNumber);

// 3.3
let newArr = [];
for (let key in student) {
    newArr.push(key);
}
console.log(newArr);