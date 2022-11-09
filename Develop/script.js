// Assignment Code
var generateBtn = document.querySelector("#generate");


//collects and checks user inputs for length//
var userLength = window.prompt("Choose a password length between 8 and 128");
while (userLength < 8 || userLength > 128) {
    var userLength = window.prompt ("Please choose a password length from 8 to 128");
    
  
  }
  var userLength = Number(userLength);
  console.log(typeof(userLength));
var userSelection = window.prompt("Your password can contain uppercase letters, lowercase letters, numbers and or symbols. Please enter the values you would like to include below, separated by a comma. You must choose at least one.");
//user Length currently allows for non-numbers, need to fix//


//collects and checks user input for type of characters and requires at least one 

if ((userSelection.includes("uppercase letters") || userSelection.includes("lowercase letters") || userSelection.includes("numbers") || userSelection.includes("symbols")  === true)) {
window.alert("click Generate Password to see your password");
}
while ((userSelection.includes("uppercase letters") === false && userSelection.includes("lowercase letters") === false && userSelection.includes("numbers") === false && userSelection.includes("symbols")  === false)) {
var userSelection = window.prompt ("Your password must contain at least one of the following attributes: can contain uppercase letters, lowercase letters, numbers and or symbols. Please enter the values you would like to include below, separated by a comma.");
}
//check user selection in console
console.log(userSelection);
console.log(userLength);



// password pieces
var symbol = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+"];
var uppercaseLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowercaseLetters = ["a","b","c","d","e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//functions to select a random character from each of the above arrays
//add typeof comparison operators to remove Nan and undefined
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

//generatePassword needs to run through all four functions, and keep doing so until userLength is reached var passwordInput = rdmLowercase () + rdmUppercase () + rdmSymbol () + rdmNum  ();
//for (var i = 0; i < userLength; i++) {
//   passwordString += symbol[i] + " ";
//}
//var passwordArray = [rdmNum  () + rdmSymbol () + rdmUppercase () + rdmLowercase ()];
//for 
//(var i = passwordArray.length; i < userLength; i++) {
//passwordArray[i] += passwordArray[i];
//}
//console.log(passwordArray);
var passwordString = ""
while (passwordString.length < userLength) {
if (userSelection.includes("numbers") === true && passwordString.length < userLength) {
  passwordString = passwordString + numbers[Math.floor(Math.random()*numbers.length)]
}
console.log(passwordString);
if (userSelection.includes("symbols") === true && passwordString.length < userLength) {
passwordString = passwordString + symbol[Math.floor(Math.random()*symbol.length)]
}
console.log(passwordString);
if (userSelection.includes("uppercase letters") && passwordString.length < userLength) {
  passwordString = passwordString + uppercaseLetters[Math.floor(Math.random()*uppercaseLetters.length)]
}
console.log(passwordString);
if (userSelection.includes("lowercase letters")&& passwordString.length < userLength) {
  passwordString = passwordString + (lowercaseLetters)[Math.floor(Math.random()*lowercaseLetters.length)];
}
console.log(passwordString.length);
}





//while (passwordString < userLength) {
//  var passwordString = passwordString + rdmNum  () + rdmSymbol () + rdmUppercase () + rdmLowercase () + passwordString;
//}


//Generates password based on user inputs using the above functions//
function generatePassword () {
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

