function spy (){
    console.log ("receives a function and calls it");
}
function receivesAFunction(spy){
    return spy();
}

function returnsANamedFunction (){
    function fn(){
        console.log("hi!")
    };
    return fn;
}

function returnsAnAnonymousFunction(){
    return function() {
        console.log ("Hi!")
    };
}