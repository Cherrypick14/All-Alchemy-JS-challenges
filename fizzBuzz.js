// The goal is to replace any number divisible by 3 with fizz
// any number divisible ny 5 with buzz
// any number divisible by both 3 and 5 with fizzbuzz
// lastly we have to return the concatenated string  wuth the words fizz or buzz

function fizzBuzz(numbers) {
   let result = ""
   for(let i= 0; i < numbers.length; i++){
     if(numbers[i] % 3 == 0 && numbers[i] % 5 == 0){
        result += "fizzbuzz"
     } else if (numbers[i] % 3 == 0){
        result += "fizz"
     } else if (numbers[i] % 5 == 0){
        result += "buzz"
      }
    }
   return result;
}
module.exports = fizzBuzz;