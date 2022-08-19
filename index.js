function receivesAFunction(cb){
    cb();
}

//arrowfunction 
const returnsANamedFunction = () =>receivesAFunction


function returnsAnAnonymousFunction(){
    return function(){
        //code
    }
}