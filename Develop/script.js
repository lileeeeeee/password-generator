// Assignment Code
var generateBtn = document.querySelector("#generate");

var userLength = window.prompt("Choose a password length between 8 and 128");
var userSelection = window.prompt("please enter the values you would like to include below, separated by a comma");

function generatePassword () {
  if (userLength < 8 || userLength > 128) {
    window.alert ("Please choose a password length from 8 to 128");
    window.prompt("Choose a password length between 8 and 128");
  }
  else if (userSelection = "lowercase") {
    console.log("this part works");
}
}


// Write password to the #password input
function writePassword() {
var password = generatePassword()

  
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

