//---------1---------
const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2021
};
console.log(car.year);

//---------2---------
const person = {
    name: "Sun",
    address: {
        street: "1122 Nguyen Trai St",
        city: "Hanoi",
        country: "Vietnam"
    }
};
console.log(person.address.street);

//---------3---------
const student = {
    name: "Sun Lee",
    grades: {
        math: 9.5,
        english: 8.5
    }
};
console.log(student.grades["math"]);

//---------4---------
const settings = {
    volume: 80,
    brightness: 75,
}
console.log("before updating volume:", settings);

settings.volume = 100;

console.log("after updating volume:", settings);

//---------5---------
const bike = {};
bike.color = "Black & Red";

console.log(bike);

//---------6---------
const employee = {
    name: "David Raya",
    age: 30
}

delete employee.age;

console.log(employee);

//---------7---------
const school = {
    classA: ["An", "Bình", "Châu"],
    classB: ["Đào", "Hương", "Giang"]
}