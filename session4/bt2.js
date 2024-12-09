var array = [1,2,3,4,5,6,7,8,9,10,1,2,3,4,5]
for(let i = 0; i< array.length-1;i++){
   for(let j  = i+1; j <array.length; j++){
    if(array[i] + array[j] === array[i]*2){
        console.log(array[i])
    }
   }
}