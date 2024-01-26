// the goal for this exercise is to bound a new function to an object called Bob

function thisName(){
    return this.name
}

const newfunction = thisName.bind({name:"Bob"}) ;

module.exports = newfunction;