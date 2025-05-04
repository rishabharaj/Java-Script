var longString = "";
longString += "Once";
longString += " upon";
longString += " a";
longString += " time";
longString += "...";
console.log(longString); // "Once upon a time..."
console.log(5 + "23") // 523 because 5 is converted to a string and concatenated with "23"
console.log(5 + +"23"); // 28 because the unary plus operator converts "23" to a number and adds it to 5
// First plus for (Addition/Concatenation)
// Second plus works as Unary Operator. 
// Hope that makes it clear. 
// But note that there has to be a space between those two plus signs.
// If any confusion still persists please let me know.
