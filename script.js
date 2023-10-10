// Assignment Code
var criteriaForm = document.getElementById("passwordCrit").style.display="none";
var generateBtn = document.querySelector("#generate");
var letters = "abdcefghijklmnopqrstuvwxyz";
var uppercaseLetters = "ABCDEFGHIJKLMNOPQQRSTUVWXYZ";
var specialChars = "!@#$%^&*()-+=<>";
var numbers = "1234567890";
var passwordCrit = "";
var passwordFinal = "";
var switchVar = "";
var passwordLength = 0;
var lCase;
var uCase;
var specChar;
var nums;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  const forChecking = [lCase, uCase, specChar, nums];

  if(lCase) {
    passwordCrit += letters;
  }
  if(uCase) {
    passwordCrit += uppercaseLetters;
  }
  if(specChar) {
    passwordCrit += specialChars;
  }
  if(nums) {
    passwordCrit += numbers;
  }

  for (var i = 0; i < passwordLength; i++) {
    var temp = "";
    temp = passwordCrit.charAt(random(0, passwordCrit.length - 1));
    passwordFinal += temp;
    temp = "";
  }

  forChecking.forEach(checkPassword)

  return passwordFinal;
}

function checkPassword(item, index) {
  var flag = false;
  if (item === true) {
    switch(index) {
      case 0 : switchVar = letters; break;
      case 1 : switchVar = uppercaseLetters; break;
      case 2 : switchVar = specialChars; break;
      case 3 : switchVar = numbers; break;
    }
    for (let i = 0; i < passwordLength; i++) {
      if (passwordFinal.includes(switchVar.charAt(i))) {
        flag = false;
        break;
      } else {
        flag = true;
      }
    }
    if (flag) {
      var temp = "";
      temp = switchVar.charAt(random(0, passwordLength));
        passwordFinal.charAt(random(0, passwordLength - 1)) = temp;
        console.log(passwordFinal);
        temp = "";
    }
  }
}

function handleSubmit(event) {
  let form = event.target;
  passwordLength = form.length.value;
  lCase = form.elements.lCase.checked;
  uCase = form.elements.uCase.checked;
  specChar = form.elements.specChar.checked;
  nums = form.elements.nums.checked;

  writePassword();
}

function show() {
  document.getElementById("passwordCrit").style.display="block";
}


// Found on Stack Overflow https://stackoverflow.com/questions/1527803/
function random(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Add event listener to generate button
generateBtn.addEventListener("click", show);
