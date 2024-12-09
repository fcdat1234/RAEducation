//alert("hello")

var number = 10;
let name = "Dat";
const age = 24;

// Operator {toan tu}
let number1 = 10;
let number2 = -10;
let numeber3 = 20.3;

number1 % number2;
number1 - number2;
number1*numeber3;
number1/number2;
let sentence1 = "Hello World";
let sentence2 = "Hello World 2";
let sentence3 = `hello world`;
//alert(`${sentence1} ${sentence2} ${sentence3}`);

//boolean
let isTurnOn= true;
let isFemale = false;

//Menh de so sanh[comparison clause]
//Toan tu so sanh[compasrison operator]
//>, <, >=,<=,==,!=
//===, !==
//alert(1 > 2);//false
//alert(1 == "1");//true
//alert(1 === "1");//false
//alert(!(1 >1));//true

//Cau dieu kien
// if(condition) {
//     //loigc 1
// }else if(condition2)  {
//     //logic 2
// }else if(condition3) {
//     //logic 3
// }else{
 
// }


//Exersise
// Tạo 1 game đoán số
// Cho sẵn 1 biến result = 50;
// Cho người dùng nhập vào 1 số cần đoán
// Nếu người dùng nhập 
let result = "50";
let guess = prompt("Nhap so");
if(guess === result){
    alert("Bingo");
}else{
    alert("Khong trung");
}

// let a = +(prompt("Nhap so a"));
// let b = +(prompt("Nhap so b"));
// alert(a + b);