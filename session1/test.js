var animal = ['dog','cat','fish','mouse','cock','elephant','platypus']
var result = animal.filter(function(animal){
    return animal.length >3
});
animal.forEach(function(bla,inc) {
    console.log(bla + "is" + inc)
})