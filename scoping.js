// Variables declared without use of let are 
// always global regardless of where you declare them
function sayHello(name) {
    console.log(name)
    anotherGlobalVariable = name;
}
globalNameVariable = "Nick"
sayHello(globalNameVariable)
console.log(anotherGlobalVariable)

// Variables declared with var are function scoped
function sayHello(name) {
    for (var i = 0; i < 3; i++) {
        console.log(i)
    }
    console.log(i) // does this work? It does!
}

// Variables declared with let are block scoped
function sayHello(name) {
    for (let i = 0; i < 3; i++) {
        console.log(i)
    }
    console.log(i) // does this work? Not any more
}