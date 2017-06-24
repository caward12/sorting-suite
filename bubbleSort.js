// var pry = require('pryjs');

function bubbleSort(array){

  var swapped = true;
  do {
    swapped = false;
    for (var i = 0; i < array.length; i++){
      if(array[i] > array[i+1]){
        var move = array[i]
        array[i] = array[i+1]
        array[i+1] = move
        swapped = true;
      }
    }
  }
  while (swapped)
  return array
}

module.exports = bubbleSort
//
// var letterArray = ["d", "b", "a", "c"]
// bubbleSort(letterArray);
// console.log(letterArray);
//
// var backwardNums = [ 5, 4, 3, 2, 1 ]
// bubbleSort(backwardNums);
// console.log(backwardNums);
//
// var longArray = [3, 6, 4, 8, 9, 0, 2, 1, 5, 7]
// bubbleSort(longArray);
// console.log(longArray);