// check for divisibility of 3 ot 5 but not both. 

function eitherNotBoth(num) {
  return (num % 3 == 0 || num % 5 == 0) && (num % 3 !=0 || num % 5 != 0) ? true : false
}
module.exports = eitherNotBoth;



