// Implementation of custome bind method==>

// Object to be used in our example
const person = {
    name: 'neeraj'
}

// method to log the arguments passed to it, this.name will be decided based on the context passed to this function;
const printName = function (otherParam, otherParam2) {
    console.log(this.name, otherParam, otherParam2)
}

// binding the person context to printName using bind()
const bindFn = printName.bind(person, 'pandey');

// executing the function, with additional arguments 
bindFn('test arg');


// Custom bind method, receives all the arguments passed to it, including additional onces
function myBindFun(...args) {
    // 1st param frmo args will be the context(in our case it will be person object)
    let otherArgs = args.slice(1); // creating a argument array excluding 1st one
    let fn = this; // storing the context passed to this function (in this case, the function that needs to be executed)
    return function (...extra) {
        fn.apply(args[0], [...otherArgs, ...extra]); // calling the printName() and passing the persion context (arg[0]) and all other arguments ([...otherArgs, ...extra]) 
    }
}

// adding out custom bind funtion in Function.prototype, it will make our myBind function available to all the function
Function.prototype.myBind = myBindFun;


// Now we can call printName() similar to bind()
const myBindFn = printName.myBind(person, 'pandey',);
myBindFn('pithoragarh')