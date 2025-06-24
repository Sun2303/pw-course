# LESSON 04
## 1. Variable Scope and Hoisting (var vs let)
### 1.1: var
- Can access it before its declaration, but the value will be undefined
- Scope: global
### 1.2: let
- Cannot be accessed before declaration
- Scope: in a block {}

## 2. Advanced Conditional Statements
### if ... else
if (condition) {
    // run code when condition = true
} else {
    // run code when condition = false
}

### if ... else if ... if
if (condition1) {
    // run code when condition1 = true
} else if (condition2) {
    // run code when condition2 = true
} else {
    // run code when all conditions = false
}

### switch-case
switch (expression) {
    case value_1:
        // run code
        break;
    case value_2:
        // run code
        break;
    case value_3:
        // run code
        break;
    case value_14:
        // run code
        break;
    default: 
        // run code when no cases match
}

## 3. Comparison Operators
### == and !=
Loose comparison (values are converted to the same type before comparing)
### === and !==
Strict comparison (no type conversion)

## 4. Advanced Loops
### for ... in:
- Loops through object properties and array indexes
- Example:
for (let key in product) {
    // console.log(product[key]);
    if (key === "Apple") {
        console.log(product[key]);
        break;
    }
}

let arrIn = [1, 2, 3, 4];
for (let index in arrIn) {
    console.log(arrIn[index]);
}

### forEach:
- Loops through array elements
- Example:
array.forEach((value, index) => {
    // logic code
})

### for ... of
- Loops through array elements
- Example:
let arrOf = [1, 2, 3, 4, 5];
for (let value of arrOf) {
    console.log(value);
}

### break and continue
- break: Stops the loop immediately
- continue: Skips the current iteration and moves to the next one. Code after continue will be ignored in that iteration.


## 5. Utils function
### 5.1 String utils function
- trim() : removes whitespace from both ends of a string

- toLowerCase() / toUpperCase() : converts text to lowercase / uppercase

- includes() : checks if a string contains a specific substring

- replace() : replaces part of a string with something else

- split() : splits a string into an array

- substring(): returns a substring based on the index positions in the main string

- indexOf() : returns the index of the first occurrence of a substring. If not found => returns -1

### 5.2 Array utils function
- map: creates a new array by applying a function to each element of the original array. It doesn’t modify the original array

- filter: returns a new array with elements that satisfy a given condition

- find: returns the first element that matches the condition. If no match is found, it returns undefined

- reduce: is used to go through the array and combine all values into one result
+ example:
let numbers = [1, 3, 3, 3];
let sum = numbers.reduce((total, num) => total + num, 3);
-> **total**: the variable that holds the single combined value
-> **num**: the current element in the array
-> **3**: the initial value for total



- some: checks if at least one element in the array meets the condition. Returns true or false

- every: checks if all elements in the array meet the condition. Returns true or false

- push: adds one or more elements to the end of the array. Returns the new length and modifies the original array

- shift: removes the first element of the array. Returns that element and modifies the original array

- unshift: adds one or more elements to the beginning of the array. Returns the new length and modifies the original array

- pop: removes and returns the last element of the array. Modifies the original array

- sort: rorts the array elements by converting them to strings and comparing them (default is based on UTF-16 / ASCII values)
+ Default: a is the number that comes first, b is the number that comes after
+ Ascending: sort((a, b) => a - b)
a - b = negative ⇒ a < b ⇒ a comes before b
a - b = positive ⇒ a > b ⇒ b comes before a
+ Descending: sort((a, b) => b - a)
b - a = negative ⇒ b < a ⇒ a comes before b
b - a = positive ⇒ b > a ⇒ b comes before a