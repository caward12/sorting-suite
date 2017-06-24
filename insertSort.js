var pry = require('pryjs');

function insertSort(array){
  for(var i = 0; i < array.length; i++){
    var current = array[i]
    var x = i - 1
    while (x >= 0 && array[x] > current){
      array[x + 1] = array[x]
      x--
    }
    array[x + 1] = current;
  }
  return array
}
module.exports = insertSort
// var array = [3, 2, 1]
// console.log(insertSort(array))
//
// var letters = ["d", "b", "a", "c"]
// console.log(insertSort(letters))
//
// var longArray = [20, 2, 13, 4, 6, 17, 15, 5, 10, 0]
// console.log(insertSort(longArray))