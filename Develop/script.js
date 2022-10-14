///////////////////////// DO NOT CHANGE ////////////////////////////////////
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
///////////////////////// DO NOT CHANGE ABOVE HERE /////////////////////////

function generatePassword() {
  /////////////////////////// WRITE YOUR CODE HERE /////////////////////////
//  = window.prompt("How many characters would you like your password to contain?");
 
  if (userChoiceLength <= 8){
    window.alert("must be at least 8 characters");
    return;
  } else if (userChoiceLength >= 128){
    window.alert("maxium characters is 128");
    return;
  } 
  }

generatePassword();
