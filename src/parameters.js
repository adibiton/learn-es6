module.exports = exports = foo;
function mandatory() {
    throw new Error('Missing paramters');
}

function foo(mustBeProvided = mandatory()){
    return mustBeProvided;
}