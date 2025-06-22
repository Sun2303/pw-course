const fullName = "Nguyễn Văn A";
const date = "2024-05-19";
const email = "example@gmail.com";

// 1.
const lastName = fullName.substring(0, 6);
console.log(lastName);

// 2.
const year = date.substring(0, 4);
console.log(year);

// 3.
const indexOfAtSymbol = email.indexOf("@");
const emailDomail = email.substring(indexOfAtSymbol + 1);
console.log(emailDomail);