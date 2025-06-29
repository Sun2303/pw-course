# LESSON 05
## 1. Advanced Functions

### 1.1: Lambda Function (Arrow Function)
- No parameters:
   () => { code }
- With parameters:
   (param1, param2) => { code }

### 1.2: Anonymous Function
- Used immediately after declaration:
   (function(parameters) {
     // code
   })();

- Used as argument to another function:
   setTimeout(() => {
     console.log("Hello");
   }, 1000);

## 2. DOM (Document Object Model)

### XPath Selector
- XPath = XML Path Language
- There are 2 types:
+ Absolute XPath – navigates from the root of the DOM tree => Starts with /
+ Relative XPath – finds elements based on attributes or structure => Starts with //

## 3. Playwright basic syntax

### test() and test.step()
- test(): Defines a test case
- test.step(): Breaks the test into labeled steps for better reporting and debugging

### Basic actions
- Navigate: page.goto(),...
- Click: click(), dbclick(), click({button: 'right'}),...
- Input: fill(), pressSequentially(),...
- Radio/ checkbox: isChecked(), check(), setChecked(),...
- Selection option
- Set Input file