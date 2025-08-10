/*
This is a workaround and not the right way to do it. If you need to bind this just use a normal function
Source: https://stackoverflow.com/questions/33308121/can-you-bind-this-in-an-arrow-function
*/
var arrowFn = () => console.log(this);
var obj = {'a': 42};

// The value of this inside the arrow function
arrowFn();
// Output: {}

// Here is a work around for binding an obj to an arrow function
(function () {
    code = eval(arrowFn.toString())
    code()
}).call(obj);
// Output: { a: 42 }

// Another Way
function bind(object, func) {
    (function () {  
        code = eval(func.toString())
        code()
    }).call(object)
}
bind(obj, arrowFn);
// Output: { a: 42 }