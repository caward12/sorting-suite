const assert = require('chai').assert
const insertSort = require('../insertSort')
describe("insertSort", function(){
  context("can sort an array", function(){
    it("letter array", function(){
      assert.deepEqual(insertSort(["d", "b", "a", "c"]), ["a", "b", "c", "d"])
    })
    it("number array", function(){
      assert.deepEqual(insertSort([5, 4, 3, 2, 1]), [1, 2, 3, 4, 5])
    })
    it("longer array", function(){
      assert.deepEqual(insertSort([3, 67, 4, 18, 9, 0, 20, 1, 55, 7]), [0, 1, 3, 4, 7, 9, 18, 20, 55, 67])
    })
  })
})