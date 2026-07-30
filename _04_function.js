function constructMessage(firstName, lastName) {
    return "Hello " + firstName + " " + lastName;
}

function displayMessage(firstName, lastName) {
    let msg = constructMessage(firstName, lastName);
    console.log(msg);
}

constructMessage("John", "Spellman");
displayMessage("John", "Spellman");