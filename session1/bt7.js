var a = +(prompt("Nhap a"));
var b = +(prompt("Nhap b"));
if(a===0){
    if(b ===  0){
        alert("Phuong trinh co vo so nghiem")
    }else{
        alert("Phuong trinh vo nghiem")
    }
}else{
    var x = -b/a;
    alert("Nghiem pt la: "+x)
}