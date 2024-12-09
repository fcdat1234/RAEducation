var arr = number([1,32,4,5,6,7,8,9])
console.log(arr)
function number(array){
    var num = +(prompt("nhap so bat ky"))
    for(let i = 0; i < array.length -1; i++){
        for(let j = i + 1; j < array.length - 1;j++){
            if(array[i] + array[j] === num){
                return `2 so co tong bang ${num + " "+  'la' + array[i] + "va" + array[j] }`
            }
        }
    }
}