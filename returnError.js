// The goal here is to return an error that has been catched when the function is invoked
// and return false if none occurs

function catchError(fn){
    try {
        fn();
    } catch (error) {
        return error
    }
    return false
}

