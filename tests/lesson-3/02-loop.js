//---------1---------
let sum = 0;
for (let i = 0; i <= 100; i++) {
    sum += i;
}
console.log(sum);

//---------2---------
for (let i = 2; i <= 9; i++) {
    console.log(`The multiplication table of ${i}`);
    for (let j = 1; j <= 10; j++) {
        console.log(`${i}x${j} =`, i * j);
    }
}

//---------3---------
let arr = [];
for (let i = 1; i <= 99; i++) {
    if (i % 2 !== 0) {
        arr.push(i);
    }
}
console.log(arr);

//---------4---------
const prefix = "user";
const suffix = "@example.com";
for (let i = 1; i <= 10; i++) {
    console.log(`${prefix}${i}${suffix}`);
}

//---------5---------
const revenues = [
    { "month": 1, "total": 20 },
    { "month": 2, "total": 100 },
    { "month": 3, "total": 40 },
    { "month": 4, "total": 160 },
    { "month": 5, "total": 400 },
    { "month": 6, "total": 1000 },
    { "month": 7, "total": 60 },
    { "month": 8, "total": 250 },
    { "month": 9, "total": 480 },
    { "month": 10, "total": 555 },
    { "month": 11, "total": 125 },
    { "month": 12, "total": 800 },
];
let totalRevenues = 0;
for (let i = 0; i < revenues.length; i++) {
    totalRevenues += revenues[i].total;
}
console.log("Total revenues: ", totalRevenues);