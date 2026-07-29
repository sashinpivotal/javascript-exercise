try {
   console.log(undefinedVariable);
}
catch (ex) {
    console.log("Exception occurred: " + ex);
}
finally {
    console.log("Cleanup code goes here!");
}