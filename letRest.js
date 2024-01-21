// how to use rest operator
function letRest(a, b, ...nums){
   console.log(nums); // 3, 4, 5
}

// while using destructuring
// const[a, b ...nums] = [1,2,3,4,5]
// console.log(nums); // 3, 4, 5

module.exports = letRest;

