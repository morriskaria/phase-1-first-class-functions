
const divide = function() {
    return 2000 / 100;
};

const square = (x) => {
    return x * x;
};

const add = (a, b) => {
    return a + b;
};


function receivesAFunction(callback) {
    callback();
}


function returnsANamedFunction() {
    function namedFunction() {
        // function body
    return namedFunction;
}

function returnsAnAnonymousFunction() {
    return function() {
        
    };
}