const name = "Nguyễn Văn A";
const email = "example@gmail.com";
const productName = "MacBook Pro";
const description = "Khóa học JavaScript cơ bản";

// 2.1
const indexAInName = name.indexOf("a");
console.log(indexAInName); //Find the index of 'A' (case-sensitive)

const indexAInName2 = name.toLowerCase().indexOf("a");
console.log(indexAInName2); //Find the index of "A" (case-insensitive)

// 2.2
const indexAtSymbolInEmail = email.indexOf("@");
console.log(indexAtSymbolInEmail);

// 2.3
const indexTextInDescription = description.indexOf("JavaScript");
console.log(indexTextInDescription);