// adding a range error in Js
function startError() {
   new Array(NaN)
}
module.exports= startError

// adding a type error in Js
function startError() {
    const y = "kiddo"

    y();
 }
 module.exports= startError

 // adding a reference error in Js
function startError() {
    console.log(nonExistentVariable);
 }
 module.exports= startError