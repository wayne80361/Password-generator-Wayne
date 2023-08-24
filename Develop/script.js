var alphabetChar = "abcdefghijklmnopqrstuvwxyz".split("");
var numChar = "0123456789".split("");
var specialChar = "~!@#$%^&*()_+-=".split("");

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  uselowerCase();
  useUpperCase();
  useSpecialChar();
  useNumChar();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  // do stuff
  // ask how long the password should be?
  var passwordLength = prompt(
    "Please choose the length or your desire password between 8 - 128 characters"
    // check if the password is betweem 8- 128 characters
  );
  if (128 >= passwordLength && passwordLength >= 8) {
    return passwordLength;
  }
  // --no? ask again
  return generatePassword();
}

// are we using lowercase characters?
function uselowerCase() {
  // --yes? put the lowercase characters into our list of chosen characters
  var lowerCase = confirm("Would you like to use lowercase in the password?");

  console.log(lowerCase);
}

// are we using uppercase characters?
function useUpperCase() {
  var upperCase = confirm(
    "How about Uppercase? Would you like it to be in the password?"
  );
  console.log(upperCase);
}

// are we using special characters?
function useSpecialChar() {
  var specialChar = confirm(
    "Specials!! They are great for security, would you like blend some?"
  );
  console.log(specialChar);
}

// are we using numerical characters?
function useNumChar() {
  var numChar = confirm(
    "Numerical? Would you like to mix them into the password?"
  );
  console.log(numChar);
}

// based on the chosen length select random characters from the chosen characters set and put them in the password

// var password = "password";
// return password;

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
