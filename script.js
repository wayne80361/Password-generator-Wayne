var lowerchar = "abcdefghijklmnopqrstuvwxyz".split("");
var upperchar = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");
var numChar = "0123456789".split("");
var specialChar = "~!@#$%^&*()_+-=".split("");

console.log(lowerchar);
console.log(upperchar);
console.log(numChar);
console.log(specialChar);

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var passwordL = getlength();

  var picklowerCase = uselowerCase();
  var pickupperCase = useUpperCase();
  var pickspecialChar = useSpecialChar();
  var picknumChar = useNumChar();

  // var userspicks = [
  //   "picklowerCase + pickupperCase + pickspecialChar + picknumChar;",
  // ];

  // if ((userspicks = [true, true, true, true])) {
  //   return password;
  // }
  if (
    picklowerCase == false &&
    pickupperCase == false &&
    pickspecialChar == false &&
    picknumChar == false
  ) {
    alert("Please choose at least one type");
    return writePassword();
  }
  {
    var characterset = "";
    if (picklowerCase) characterset += lowerchar;
    if (pickupperCase) characterset += upperchar;
    if (pickspecialChar) characterset += specialChar;
    if (picknumChar) characterset += numChar;
    console.log(characterset);

    var password = "";
    for (i = 0; i < Number(passwordL); i++) {
      var random = Math.floor(Math.random() * characterset.length);
      password += characterset.charAt(random);

      console.log(Number(passwordL));
      // password += characterset.charAt(random);
    }
    password;
  }
  // for (i = 0; i < password.length; i++) {
  //   password = "";
  //   password += lowerchar[Math.floor(Math.random() * lowerchar.length)];
  //   password += lowerchar[Math.floor(Math.random() * lowerchar.length)];
  //   password += numChar[Math.floor(Math.random() * numChar.length)];
  //   password += specialChar[Math.floor(Math.random() * specialChar.length)];
  // }

  // while (password > password.length) {
  //   password += userspicks;
  //   [Math.floor(Math.random() * userspicks.length)];
  // }

  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function getlength() {
  // do stuff
  // ask how long the password should be?
  var passwordLength = prompt(
    "Please choose the length or your desire password between 8 - 128 characters"
    // check if the password is betweem 8- 128 characters
  );
  if (128 >= passwordLength && passwordLength >= 8) {
    console.log(passwordLength);
    return passwordLength;
  }
  // --no? ask again
  getlength();
}

// are we using lowercase characters?
function uselowerCase() {
  // --yes? put the lowercase characters into our list of chosen characters
  var picklowerCase = confirm(
    "Would you like to use lowercase in the password?"
  );
  if (picklowerCase == true) {
    console.log(picklowerCase);
    return picklowerCase;
  } else {
    console.log(picklowerCase);
    return false;
  }
}

// are we using uppercase characters?
function useUpperCase() {
  var pickupperCase = confirm(
    "How about Uppercase? Would you like it to be in the password?"
  );
  if (pickupperCase == true) {
    console.log(pickupperCase);
    return pickupperCase;
  } else {
    console.log(pickupperCase);
    return false;
  }
}

// are we using special characters?
function useSpecialChar() {
  var pickspecialChar = confirm(
    "Specials!! They are great for security, would you like blend some?"
  );
  if (pickspecialChar == true) {
    console.log(pickspecialChar);
    return pickspecialChar;
  } else {
    console.log(pickspecialChar);
    return false;
  }
}

// are we using numerical characters?
function useNumChar() {
  var picknumChar = confirm(
    "Numerical? Would you like to mix them into the password?"
  );
  if (picknumChar == true) {
    console.log(picknumChar);
    return picknumChar;
  } else {
    console.log(picknumChar);
    return false;
  }
}

// based on the chosen length select random characters from the chosen characters set and put them in the password
// var password = "password";
// return password;

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
