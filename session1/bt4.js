var weight = +(prompt("Nhap can nang"));
var height = +(prompt('Nhap chieu cao'));
var bmi = weight/(height*height);

if(bmi < 18.5){
    alert("Ban thuoc can nang thap")
}else if(bmi> 18.5 && bmi <24.5){
    alert("Ban thuoc can nang binh thuong")
}else if(bmi >= 25){
    alert("Ban bi thua can")
}else if(bmi> 25 && bmi < 29,9){
    alert("Ban thuoc tien beo phi")
}else if(bmi > 30 && bmi < 34,9){
    alert("Ban thuoc beo phi do I")
}else if(bmi > 35 && bmi < 39,9){
    alert("Ban thuoc beo phi do II")
}else if(bmi > 40){
    alert("Ban thuoc beo phi do III")
}