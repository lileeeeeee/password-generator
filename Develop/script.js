// Assignment Code
var generateBtn = document.querySelector("#generate");


//collects and checks user inputs for length//
var userLength = window.prompt("Choose a password length between 8 and 128");
while (userLength < 8 || userLength > 128) {
    var userLength = window.prompt ("Please choose a password length from 8 to 128");
  
  }
var userSelection = window.prompt("Your password can contain uppercase letters, lowercase letters, numbers and or symbols. Please enter the values you would like to include below, separated by a comma. You must choose at least one.");

//collects and checks user input for type of characters and requires at least one 

if ((userSelection.includes("uppercase letters") || userSelection.includes("lowercase letters") || userSelection.includes("numbers") || userSelection.includes("symbols")  === true)) {
window.alert("click Generate Password to see your password");
}
while ((userSelection.includes("uppercase letters") === false && userSelection.includes("lowercase letters") === false && userSelection.includes("numbers") === false && userSelection.includes("symbols")  === false)) {
var userSelection = window.prompt ("Your password must contain at least one of the following attributes: can contain uppercase letters, lowercase letters, numbers and or symbols. Please enter the values you would like to include below, separated by a comma.");
}


//will generate a password based on user inputs, only shows a random integer right now, is not affected by user input//
function generatePassword () {
  return Math.floor(Math.random());
}

// Write password to the #password input
function writePassword() {
var password = generatePassword()

  
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

