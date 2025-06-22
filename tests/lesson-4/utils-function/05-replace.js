const phoneNumber = "0123 456 789";
const report = "Có một lỗi trong hệ thống";
const numberStr = "1,234,567";

// 1.
const formattedPhone = phoneNumber.replace(/ /g, ".");
console.log(formattedPhone);

// 2.
const updatedReport = report.replace(/lỗi/g, "bug");
console.log(updatedReport);

// 3.
const formattedNumberStr = numberStr.replace(/,/g, ".");
console.log(formattedNumberStr);