//how to use spread operator
const numbers = [4,5,6]
function addNum(a, b, c) {
    return a + b + c
  
}
const totalsum = addNum(...numbers) // spreading out the numbers in our array
console.log(totalsum) // 15

module.exports = spreadOperator;