// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword () {
//collects and checks user input for length and confirms it's a number //
var userLength = window.prompt("Choose a password length between 8 and 128");

userLength = parseInt(userLength);
console.log(userLength);

while (userLength < 8 || userLength > 128 || isNaN(userLength)) {
    var userLength = window.prompt ("Please choose a password length from 8 to 128");  
  }
  
// collects user selections for password characters in a single string
var userSelection = window.prompt("Your password can contain uppercase letters, lowercase letters, numbers and/or symbols. Please enter the values you would like to include below, separated by a comma. You must choose at least one.");

//collects and checks user input for type of characters and requires at least one 

if ((userSelection.includes("uppercase letters") || userSelection.includes("lowercase letters") || userSelection.includes("numbers") || userSelection.includes("symbols")  === true)) {
window.alert("click Generate Password to see your password");
}
while ((userSelection.includes("uppercase letters") === false && userSelection.includes("lowercase letters") === false && userSelection.includes("numbers") === false && userSelection.includes("symbols")  === false)) {
var userSelection = window.prompt ("Your password must contain at least one of the following attributes: uppercase letters, lowercase letters, numbers and or symbols. Please enter the values you would like to include below, separated by a comma.");
}
//checks user selections in console
console.log(userSelection);
console.log(userLength);

// password pieces
var symbol = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+"];
var uppercaseLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowercaseLetters = ["a","b","c","d","e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// builds an array based on user parameters
var possibleCharacters = [];
if  (userSelection.includes("numbers") === true) {
  possibleCharacters = possibleCharacters.concat(numbers);
}
console.log(possibleCharacters);
if (userSelection.includes("symbols") === true) {
possibleCharacters = possibleCharacters.concat(symbol);
}
console.log(possibleCharacters);
if (userSelection.includes("uppercase letters")) {
  possibleCharacters = possibleCharacters.concat(uppercaseLetters);
}
console.log(possibleCharacters);
if (userSelection.includes("lowercase letters")) {
  possibleCharacters = possibleCharacters.concat(lowercaseLetters);
}
console.log(possibleCharacters);

// iterates through the array of user selected options until the user's chosen length is met //
var passwordString = " ";
for (let i = 0; i < userLength; i++) {
   passwordString = passwordString + ((possibleCharacters[Math.floor(Math.random()*possibleCharacters.length)]));
}

  return passwordString;
}

// Write password to the #password input
function writePassword() {
var password = generatePassword()

  
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

