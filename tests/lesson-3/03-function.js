//---------1---------
function multiply(a, b) {
    console.log(`${a}x${b}=`, a * b);
}
multiply(5, 10);
multiply(2, 9);


//---------2---------
function findMin(a, b, c) {
    min = a;
    if (b < a && b < c) {
        return console.log(`Min is ${b}`);
    }
    if (c < a && c < b) {
        return console.log(`Min is ${c}`);
    }
    return console.log(`Min is ${a}`);
}

findMin(3000, 600, 400.12);
findMin(0, -2, 15);

//---------3---------
function getTopStudents(studentList, threshold) {
    let topStudents = [];
    studentList.forEach(student => {
        if (student.score >= threshold) {
            topStudents.push(student.name);
        }
    });
    return console.log(topStudents);

}

const studentList = [
    { name: "Sun", score: 9 },
    { name: "Mark", score: 5 },
    { name: "Saliba", score: 7 },
    { name: "Garibel", score: 10 },
    { name: "Smith", score: 8.3 },
    { name: "Will", score: 2 },
]
getTopStudents(studentList, 7);

//---------4---------
function calculateInterest(principal, rate, years) {
    const total = principal + (principal * rate * years) / 100
    return console.log(`The total after ${years} years:`, total);
}

const interestInput = {
    principal: 1000000,
    rate: 3,
    years: 6
}
calculateInterest(interestInput.principal, interestInput.rate, interestInput.years);