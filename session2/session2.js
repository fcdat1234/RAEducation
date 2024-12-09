// for (let i = 1; i <= 10; i++) {
//     console.log("-".repeat(20));
//     for (let j = 1; j <= 10; j++) {
//         console.log(`${i} * ${j} = ${i * j}`);
//     }
// }

// for(let i = 1; i<= 7;i++){
//     console.log("ngay 1");
//     console.log("ngay 1");
//     console.log("ngay 3");
// }
// var number = +(prompt("Nhap so nguyen duonng bat ky: "))
// for(let i = 1; i < number; i++){
//     console.log(i)
// }

// var x = +(prompt("Nhap so nguyen dương bất kỳ: "))
// var y = 0;
// var z = 1;
// var n = +(prompt("Nhap so bat ky:"))
// var a
// var b=0

// for(let i =1; i <= x; i++){
//     sum = sum + i;
//     
// }
// console.log(sum)

//caub:
// for(let i = 1; i <= x;i++){
//     b = b+  i*i
//     
// }
// console.log(b)


//cau c:
//var n = +(prompt("Nhap:"))
// var sum = 1;  
// for (var i = 1; i < n; i++) {
//     sum += 1 / (i * (i + 1));  
// }
// console.log("Tổng của dãy số C là: " + sum);

// for(let i = 1; i<= n;i++){
//     if(i % 3 ===0){
//         console.log(i + "is Fizz")
//     }else if(i % 5 == 0){
//         console.log(i + "is Buzz")
//     }else if(i % 15 ==0){
//         console.log(i +"is FizzBuzz")
//     }else{
//         console.log(i);
//     }
// }

//bai1
// var sum = 0;
// for(i = 1; i <= 30;i++){
//    sum += i*5
// }
// console.log(sum);

//bai2: Tính tổng 20 số đầu tiên trong dãy Fibonacci

// var a = 1
// var b = 0
// var sum
// console.log(a)
// console.log(b)
// for(i = 2; i< 20;i++ ){
    
//     sum =a +b;
//     a= b;
//     b = sum;
//     console.log(sum)
// }

// //bai3:In bang cuu chuong
// for (let i = 1; i <= 10; i++) {
//     console.log("-".repeat(20));
//     for (let j = 1; j <= 10; j++) {
//         console.log(`${i} * ${j} = ${i * j}`);
//     }
// }

//Vong lap while
var result = 50;
var guess = +(prompt("Nhap"))
let loop = true
while(loop === true){
    var guess = +(prompt("Nhap"))
    if(guess < result){
        console.log("Too small")
    }else if(guess > result){
        console.log("Too big")
    }else{
        console.log("bingo")
        loop = false
    }
}