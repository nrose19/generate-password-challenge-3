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
// variables for user choices

var userChoiceLength = parseInt(window.prompt("How many characters would you like your password to contain?"));

     // Ensuring they choose an appropriate character amount
        if (userChoiceLength < 8 || userChoiceLength > 128){
           window.alert("must be between 8 and 128 characters. Please try again.");
          return;
        } else if (isNaN(userChoiceLength)){
          window.alert("must be a number");
          return;
        }

  var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var upperCase = [lowerCase.map(letter => letter.toUpperCase())];
  var numbers = ["0","1","2","3","4","5","6","7","8","9"];
  var specialChar = ["!","@","#","$","%","^","&","*","~","=","+","?","{","}"];


  var allChoices = [];
  
  // User prompts

  var userLowerCase = window.confirm("Click OK to confirm use of lower case.");
  var userUpperCase = window.confirm("Click OK to confirm use of upper case.");
  var userNumbers = window.confirm("Click OK to confirm use of numbers.");
  var userSpecialChar = window.confirm("Click OK to confirm use of special characters.");

// pushing all chosen characters into allChoices, to confirm that user has (or has not) selected that choice

if(userLowerCase){
  allChoices.push(lowerCase);
}
if(userUpperCase){
  allChoices.push(upperCase);
}
if(userNumbers){
  allChoices.push(numbers);
}
if(userSpecialChar){
  allChoices.push(specialChar);
}

// to check if the array is working:
// console.log(allChoices);



// then generate password with what the user chose
// I am completely stuck on how to actually randomize + generate the password. 

var passwordGenerated = "";

for(var i = 0; i < userChoiceLength; i++){
  var randomPass = allChoices[Math.floor(Math.random()*(0, allChoices.length-1))];
  passwordGenerated += randomPass;
}

}

generatePassword();


