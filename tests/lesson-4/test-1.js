//1 - Khởi động tàu K15
const departurePlanet = "Trái Đất";
const mission = "Khám phá Vũ trụ K15";
const crew = ["Sun", "Quỳnh Như", "Tuyết Nhi", "Vĩnh Phú", "Huỳnh Liên", "Sơn Thịnh", "Thảo Ly", "Thùy Trang", "Hương Cao", "Quang Toàn", "Mai Hoàng"];

function launchShip(crewName) {
    const message = `Chuẩn bị khởi động! Phi hành đoàn gồm: ${crewName} sẽ đồng hành cùng bạn trong chuyến phiêu lưu ${mission}!`;
    return message;
}

let message = launchShip(crew);
console.log(message);

//2 - Du hành đến hành tinh bí ẩn
function calculateDistance(speed, time) {
    const distance = speed * time;
    return distance;
}

const speed = 1000;
const time = 24;
let distance = calculateDistance(speed, time);
console.log("Khoảng cách tính toán được: ", distance);

const travelData = {
    speed: 1000,
    time: 24
}
let distance2 = calculateDistance(travelData.speed, travelData.time);
console.log("Khoảng cách tính toán được: ", distance2);

//3 - Hành tinh kỳ lạ
function convertTimeToHex(time) {
    const hexTime = time.toString(16);
    return hexTime;
}

const mysteryPlanetTime = 120;
let hexTime = convertTimeToHex(mysteryPlanetTime);
console.log(hexTime);

//4 - Khám phá kho báu
function decryptCode1(code) {
    let decryptCode = "";
    code.split("").forEach((char) => {
        if (char === char.toUpperCase()) {
            decryptCode += char.toLowerCase();
        } else if (char === char.toLowerCase()) {
            decryptCode += char.toUpperCase();
        } else {
            decryptCode += " ";
        }
    })
    return decryptCode;
} //Using forEach()

function decryptCode2(code) {
    let decryptCode = "";

    for (let char of code) {
        if (char === char.toUpperCase()) {
            decryptCode += char.toLowerCase();
        } else if (char === char.toLowerCase()) {
            decryptCode += char.toUpperCase();
        } else {
            decryptCode += " ";
        }
    }

    return decryptCode;
} //Using for..of

const code = "K15 Challenge";
let covertedCode = decryptCode1(code);
console.log(covertedCode);

let convertedCode2 = decryptCode2(code);
console.log(convertedCode2);

//5 - Trở về Trái Đất
function returnToEarth() {
    console.log("Chuẩn bị trở về Trái Đất!");
}
returnToEarth();