// Assignment Code
var generatebtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generatebtn.addEventListener('click', writePassword);

function generatePassword() {

  // This prompts the User to input a value (string) for the password length. It needs to be between 8 and 128 exclusively.  
  var howManyChars = prompt("How many characters would you like your password to contain? Length must be between 8 and 128.");

  // Validation: If User inputs a number not between 8 and 128, this will alert the User, and return a "try again" message.  
  if (howManyChars < 8 || howManyChars > 128) {
    alert("Length must be between 8 and 128.")
    return "Try again"
  }

  //These additional questions are asked to the user after the first question is answered. Prompts will only allow the User to click OK or Cancel (Yes or No).
  var confirmSpecialChars = confirm("Click Ok to confirm including special characters.");
  var confirmNumbers = confirm("Click Ok to confirm including numeric characters.");
  var confirmLowercase = confirm("Click Ok to confirm including lowercase characters.");
  var confirmUppercase = confirm("Click Ok to confirm including upper characters.")

  //These are the 4 arrays that will be part of the password being generated.
  var specialChars = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'];
  var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var uppercaseChars = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var lowercaseChars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  //these if statements will concanate the different criteria depending on User's choices.
  var availableChars = [];

  if (confirmSpecialChars) {
    availableChars = availableChars.concat(specialChars);
  }
  if (confirmNumbers) {
    availableChars = availableChars.concat(numbers);
  }
  if (confirmLowercase) {
    availableChars = availableChars.concat(lowercaseChars);
  }
  if (confirmUppercase) {
    availableChars = availableChars.concat(uppercaseChars);
  }

  //   for loop is created for the if statments for each array until the password length is what the User wants.
  var userPassword = [];
  for (let i = 0; i < howManyChars; i++) {
    const IndexValue = (Math.floor(Math.random() * availableChars.length));
    const randomChars = availableChars[IndexValue];
    userPassword.push(randomChars)
  }
  return userPassword.join("");
}
