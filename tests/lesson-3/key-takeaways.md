# LESSON 03
## 1. Git 
### 1.1: Undo actions
- **git restore --staged < file >**: Remove a file's snapshot from the Staging Areawhen needed.
- **git reset HEAD~1**: Reset the project back to previous commit. The number after ~ indicates how many commits to go back from the current commit.
### 1.2: Branching model
- Git uses branches to work on different features or fixes separately, and keeps a main branch for running CI/CD.
- **Commands**:
+ git branch < branch_name >: create a new branch
+ git checkout < branch_name >: switch to the branch_name branch
+ git checkout -b < branch_name >: create and switch to the branch_name branch
- **Git ignore**: ignore files without tracking from git
+ ignore file: < file_name >
+ ignore folder: < folder_name >/

## 2. Javascript
### 2.1 Conventions
Conventions for naming files in JavaScript 
- snake_case: not use yet
- kebab-case: file name
- camelCase: variable name
- PascalCase: class name

### 2.2 console.log()
There are some ways to log a thing:
- console.log('Hello');
- console.log("Hello");
- console.log(`${variable_name}`);
- console.log("Hello", ${variable_name});

### 2.3 Object
An object is used to store multiple values in a single variable or constant. Displayed as key-value pairs.

#### Example:
const person = {
  name: "Sun",
  age: 25,
  address: {
    street: "Nguyen Trai",
    city: "Hanoi",
    country: "Vietnam"
  }
};
console.log(person.name); ---> Sun
console.log(person["age"]); ---> 25
console.log(person.address.city); ---> Hanoi

#### To add a new property:
person.job = "Writer";

#### To assign a new vale:
person.address.city = "HCM"
console.log(person.address.city) ---> HCM

#### To delete a property:
delete person.age;

console.log(person)
=> {
  name: "Sun",
  job: "Writer",
  address: {
    street: "Nguyen Trai",
    city: "HCM",
    country: "Vietnam"
  }
}


### 2.4 Logical operator
- **&&**: both sides must be true.
- **||**: at least one side must be true.
- **!**: reverses the value of the condition.


### 2.5 Array
An array is a special variable that can store multiple values (different data types) in one place.

const arr = [1, "One", 2, "Two", { name: "Sun", age: "30" }];
console.log(arr.length); --> 5
console.log(arr) --> [1, "One", 2, "Two", { name: "Sun", age: "30" }]

arr.push("Test");

console.log(arr) --> [1, "One", 2, "Two", { name: "Sun", age: "30" }, "Test"]

### 2.6 Function
A function is a reusable block of code that does something specific. You define it once, and you can use it many times.

**Syntax:**
function < nameFunction > () {
    //code
}>

function < nameFunction > (a, b) {
    //code using a and b
}>

function < nameFunction > () {
    return "something";
}>