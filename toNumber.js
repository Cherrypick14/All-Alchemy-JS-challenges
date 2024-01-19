//The goal here is to convert the string to number
// This can be done explictly or implictly so we are going the implictly way
function toNumber(string){
    const parsedNumber = +string
    return isNaN(parsedNumber) ? 0 : parsedNumber
}
module.exports = toNumber