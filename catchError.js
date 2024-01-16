// We have a fn argument passed in the function which is a function
// The goal is to catch an error when the function is invoked

function catchError(fn){
    try {
        fn();
    } catch (error) {
     return error
    }
}

