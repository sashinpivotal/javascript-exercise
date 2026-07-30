// - This defines a generator function — indicated by 
//   the function* syntax (the asterisk). 
// - Generator functions behave very differently 
//   from regular functions: instead of running 
//   to completion when called, they run incrementally, 
// pausing at each yield and waiting to be resumed.
function* generatorFunction() {
    console.log('this is the first time i have been executed');
    yield null;
    console.log('this is the second');
}

// - generatorFunction() does not run any of the code inside it. 
//   It just creates a generator object.
const generator = generatorFunction();

// - Nothing executes until you call .next() on that generator object. 
// - Each call to .next() runs the code up to the next yield, 
// then pauses there.
console.log('activating once');
generator.next();
console.log('activating second time');
generator.next(); 