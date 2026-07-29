let complexObject = {
    name: "Fred",
    age: 30,
    address: {
        line1: "1 High Street",
        line2: "Bristol"

    }
}
function takeInObjectAndAugmentIt(someObject) {
    return {
        ...someObject,
        country: "UK"
    }
}
console.log(JSON.stringify(takeInObjectAndAugmentIt(complexObject)));