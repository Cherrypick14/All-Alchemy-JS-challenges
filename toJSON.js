// the goal of this task is to stringify our object by converting it to JSON
function toJSON(obj){
   const myObj = obj
   return JSON.stringify(myObj) 
}
module.exports = toJSON;