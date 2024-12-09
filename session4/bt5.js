var array1 = [1,2,3,4,6,5];
var array2 = [1,3,4,5,7,8];
var array3 = [1,3,8,9];
for(let i = 0; i < array1.length - 1;i++){
    for(let j = 0; j < array2.length - 1;j++){
        for(let k = 0; k < array3.length - 1;k++){
            if(array1[i] === array2[j] && array2[j] === array3[k]){
                console.log(array1[i])
            }
        }
    }
}