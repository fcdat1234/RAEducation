// //bai3
// var arr = [1,2,3,4,1,2,3,6,7]
// for(let  i = 0; i < arr.length - 1; i++){
//     for(let j = i + 1; j < arr.length -1; j++){
//         if(arr[i] === arr[j]){
//             delete arr[j]
//             console.log(arr)
//         }
//     }
// }

//bai2
// let str = "program"
// let vitri = str.charAt(0).toUpperCase();
// let vitri2 = str.replace(str[0],vitri);
// console.log(vitri2)

//bai4
// var arr = [4,3,2,1,5,6,8,7]
// for(let i = 0; i < arr.length;i++){
//     for(j = i + 1; j < arr.length; j++){
//         var count
//         if(arr[i] > arr [j]){
//             count = arr[i];
//             arr[i] = arr[j];
//             arr[j] = count
//             console.log(arr)
//         }
        
//     }
// }

//bai5
// var employee = ["Nam", "Duong", "Duc"];

// function display(){
//      for(let index in employee){
//         console.log(`${+index + 1}. ${employee[index]}`)
//         }
// }
// var loop = true
// while(loop){
//     var enter = prompt("Nhap 1 trong 4 chu cai C/U/R/D").toUpperCase();
//     switch(enter){
//         case "C":
//             let add = prompt("Them ten nhan vien:")
//             employee.push(add)
//             display();
//             break;
//         case "R":
//             display();
//             break;
//         case "U":
//             let update = prompt("Nhap vao vi tri muon cap nhat")
//             let newEmp = prompt("Nhap ten nhan vien moi:");
//             employee[update - 1] = newEmp;
//             display();
//             break;
//         case "D":
//             let deleteIndex = prompt("Moi ban nhap vao vi tri muon xoa");
//             employee.splice(deleteIndex - 1, 1);
//             display();
//             break;
//         case "E":
//             alert("Da thoat");
//             loop = false;
//             break;
//         default:
//             alert("Tu khoa khong hop le, vui long nhap lai");
//             break;
            
//     }
// }

//bai 6

// var day = +(prompt("Nhập ngày"));
// var month = +(prompt("Nhập tháng"));
// var year = +(prompt("Nhập năm"));
// if (month === 2) {
//     if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) { // Năm nhuận
//         if (day < 1 || day > 29) {
//             console.log("Ngày " + day + "/" + month + "/" + year + " KHÔNG hợp lệ");
//         } else {
//             console.log("Ngày " + day + "/" + month + "/" + year + " hợp lệ");
//         }
//     } else {
//         if (day < 1 || day > 28) {
//             console.log("Ngày " + day + "/" + month + "/" + year + " KHÔNG hợp lệ");
//         } else {
//             console.log("Ngày " + day + "/" + month + "/" + year + " hợp lệ");
//         }
//     }
// } 
// else if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
//     if (day < 1 || day > 31) {
//         console.log("Ngày " + day + "/" + month + "/" + year + " KHÔNG hợp lệ");
//     } else {
//         console.log("Ngày " + day + "/" + month + "/" + year + " hợp lệ");
//     }
// } 
// else if (month === 4 || month === 6 || month === 9 || month === 11) {
//     if (day < 1 || day > 30) {
//         console.log("Ngày " + day + "/" + month + "/" + year + " KHÔNG hợp lệ");
//     } else {
//         console.log("Ngày " + day + "/" + month + "/" + year + " hợp lệ");
//     }
// } 
// else {
//     console.log("Ngày " + day + "/" + month + "/" + year + " KHÔNG hợp lệ");
// }

// //bai1
// function reverseString(str) {
//     let reversedStr = "";
   
//     for (let i = str.length - 1; i >= 0; i--) {
//         reversedStr += str[i];
//     }
//     return reversedStr;
// }
// console.log(reverseString("program")); 
// console.log(reverseString("data"));    
