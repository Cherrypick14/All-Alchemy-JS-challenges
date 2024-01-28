// the goal of this task is to use a call site

const obj = {
    name: 'Bob',
    getName : function(){
        return this.name
    }
}

module.exports = obj;