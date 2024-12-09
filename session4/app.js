// let todoList = [
//     "Wake up early at 7am",
//     "Go to work at 8am",
//     "Eat 3 meals per day"
// ];
// function displayTodo(){
//     for(let index in todoList){
//         console.log(`${+index + 1}. ${todoList[index]}`)
//     }
// }
// var nhap;
// var loop= true;


// while (loop) {
//     nhap = prompt("Nhap vao tu khoa").toUpperCase();
    
//     switch (nhap) {
//         case "C":
//             var nhap1 = prompt("Nhap them todo:");
//             todoList.push(nhap1);
//             displayTodo();
//             break; // Dừng sau khi thêm todo

//         case "R":
//             for (let index in todoList) {
//                 console.log(`${+index + 1}. ${todoList[index]}`);
//             }
//             break; // Dừng sau khi hiển thị todoList

//         case "U":
//             let updateIndex = prompt("Moi ban nhap vao vi tri muon cap nhat");
//             let newTodo = prompt("Moi ban nhap noi dung moi cua todo");
//             todoList[updateIndex - 1] = newTodo;
//             displayTodo();
//             break; // Dừng sau khi cập nhật todo

//         case "D":
//             let deleteIndex = prompt("Moi ban nhap vao vi tri muon xoa");
//             todoList.splice(deleteIndex - 1, 1);
//             displayTodo();
//             break; // Dừng sau khi xóa todo

//         case "E":
//             alert("Cam on da su dung dich vu");
//             loop = false; // Thoát vòng lặp
//             break;

//         default:
//             alert("Tu khoa khong hop le, vui long nhap lai");
//             break; // Dừng sau khi nhập từ khóa không hợp lệ
//     }
// }


// function fakeATM(amount, pin, type){
//     console.log("So sanh ma pin voi csdl", pin);
//     console.log(`kiem tra xem con bao nhieu to ${amount}`);
//     console.log(`Kiem tra xem ATM co ho tro the ${type} hay không`);       
//     return amount * 100;
// }
// var sum = 0;
// function show(array, number){
    
//     for(let i = 0; i < array.length; i++){
//         for(let j = i + 1; j < array.length;j++){
//             if(array[i] + array[j]=== number){
//                 return [array[i], array[j]]
//             }
//         }
//     }
// }
// var result = show([1,2,3,4,5,6,7,8,9],8)
// console.log(result)