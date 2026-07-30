// Variables declared without use of let are 
// always global regardless of where you declare them
function sayHello1(name) {
    console.log(name)
    anotherGlobalVariable = name;
}

globalNameVariable = "Nick"
sayHello1(globalNameVariable)
console.log(anotherGlobalVariable)

// Variables declared with var are function scoped
// - var is discouraged in modern JavaScript mainly because of 
//   this scoping quirk that could cause subtle bugs. 
// - let and const (introduced in ES6/2015) fix these problems
function sayHello2(name) {
    for (var i = 0; i < 3; i++) {
        console.log("sayHello2: " + i)
    }
    console.log("sayHello2: " + i) // does this work? It does!
}

sayHello2("Nick");

// Variables declared with let are block scoped
function sayHello3(name) {
    for (let i = 0; i < 3; i++) {
        console.log("sayHello3: " + i)
    }
    console.log("sayHello2: " + i) // does this work? Not any more
}

sayHello3("Nick");