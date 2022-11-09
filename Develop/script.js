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
var userSelection = window.prompt("Your password can contain uppercase letters, lowercase letters, numbers and or symbols. Please enter the values you would like to include below, separated by a comma. You must choose at least one.");

//collects and checks user input for type of characters and requires at least one 

if ((userSelection.includes("uppercase letters") || userSelection.includes("lowercase letters") || userSelection.includes("numbers") || userSelection.includes("symbols")  === true)) {
window.alert("click Generate Password to see your password");
}
while ((userSelection.includes("uppercase letters") === false && userSelection.includes("lowercase letters") === false && userSelection.includes("numbers") === false && userSelection.includes("symbols")  === false)) {
var userSelection = window.prompt ("Your password must contain at least one of the following attributes: can contain uppercase letters, lowercase letters, numbers and or symbols. Please enter the values you would like to include below, separated by a comma.");
}
//checks user selections in console
console.log(userSelection);
console.log(userLength);



// password pieces
var symbol = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+"];
var uppercaseLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowercaseLetters = ["a","b","c","d","e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// possibleCharacters = a concatenation of the paramaters

//functions do not need these
function rdmNum  () {
 if (userSelection.includes("numbers")) 
return numbers[Math.floor(Math.random()*numbers.length)] 
}

function rdmSymbol () {
   if (userSelection.includes("symbols"))
  return symbol[Math.floor(Math.random()*symbol.length)];
  }

function rdmUppercase () {
  if (userSelection.includes("uppercase letters"))
  return (uppercaseLetters)[Math.floor(Math.random()*uppercaseLetters.length)];
}

function rdmLowercase () {
  if (userSelection.includes("lowercase letters"))
  return (lowercaseLetters)[Math.floor(Math.random()*lowercaseLetters.length)];
}

//need this code, commented out to test a more efficient method

//var passwordString = ""
//while (passwordString.length < userLength) {
//if (userSelection.includes("numbers") === true && passwordString.length < userLength) {
 // passwordString = passwordString + numbers[Math.floor(Math.random()*numbers.length)]
//}
//console.log(passwordString);
//if (userSelection.includes("symbols") === true && passwordString.length < userLength) {
//passwordString = passwordString + symbol[Math.floor(Math.random()*symbol.length)]
//}
//console.log(passwordString);
//if (userSelection.includes("uppercase letters") && passwordString.length < userLength) {
//  passwordString = passwordString + uppercaseLetters[Math.floor(Math.random()*uppercaseLetters.length)]
//}
//console.log(passwordString);
//if (userSelection.includes("lowercase letters")&& passwordString.length < userLength) {
//  passwordString = passwordString + (lowercaseLetters)[Math.floor(Math.random()*lowercaseLetters.length)];
//}
//console.log(passwordString.length);
//}

// var possibleCharacters = [];

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

// for (let i = 0; i < userLength; i++) {
//  passwordString = passwordString + possibleCharacters[Math.floor(Math.random()*possibleCharacters.length)]
// }
var passwordString = " ";
for (let i = 0; i < userLength; i++) {
   passwordString = passwordString + ((possibleCharacters[Math.floor(Math.random()*possibleCharacters.length)]));
 
}
//console.log(passwordString);

console.log(possibleCharacters[Math.floor(Math.random()*possibleCharacters.length)]);

console.log(Math.floor(Math.random()*possibleCharacters.length));


//while (passwordString < userLength) {
//  var passwordString = passwordString + rdmNum  () + rdmSymbol () + rdmUppercase () + rdmLowercase () + passwordString;
//}



//Generates password based on user inputs using the above functions//

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

