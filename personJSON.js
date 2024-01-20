// the goal here is to convert a JSON back to Object using Parse
const personJSON = `{
    "name" : "miles",
    "age" : 24,
    "isReal": true
}`;
 const person = JSON.parse(personJSON)
 console.log(person);

 //how to now access the values from the Keys
   console.log(person.name);
   console.log( person.age);
   console.log( person.isReal);

module.exports = personJSON;