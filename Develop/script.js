// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  // do stuff
  // ask how long the password should be?
  // check if the password is betweem 8- 128 characters
  // --no? ask again
  // are we using lowercase characters?
  // --yes? put the lowercase characters into our list of chosen characters
  // are we using uppercase characters?
  // are we using special characters?
  // are we using numerical characters?
  // based on the chosen length select random characters from the chosen characters set and put them in the password

  var password = "password";
  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
