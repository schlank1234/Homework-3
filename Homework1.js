

// Array of special characters to be included in password
const specialCharacters = [
    '@',
    '%',
    '+',
    '\\',
    '/',
    "'",
    '!',
    '#',
    '$',
    '^',
    '?',
    ':',
    ',',
    ')',
    '(',
    '}',
    '{',
    ']',
    '[',
    '~',
    '-',
    '_',
    '.'
  ];
  
  // Array of numeric characters to be included in password
  const numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  
  // Array of lowercase characters to be included in password
  const lowerCasedCharacters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
  ];
  
  // Array of uppercase characters to be included in password
  const upperCasedCharacters = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
  ];
   
  
  // Function to generate password with user input
  function getPasswordOptions() {
    
  
    var result = [];
  
  
  //Complete your function here...
  var passwordLength = prompt("How many characters would you like your password to contain?");
  
  
  // Conditional statement to check if password length is a number. Prompts end if this evaluates false
  
  if(!isNaN(passwordLength));
  else
  {
    passwordLength = prompt("Please enter a number.")
  }
    // Conditional statement to check if password length is at least 8 characters long. Prompts end if this evaluates false
    if(passwordLength >= 8);
    
    else
    {
    passwordLength = prompt("Please enter a number greater than or equal to 8.")
  
    }
  
  
    // Conditional statement to check if password length is less than 128 characters long. Prompts end if this evaluates false
  
  if(passwordLength<=128);
  
  else
  {
    passwordLength = prompt("Please enter a number less than or equal to 128.")
  
  }
  
  var numbers = confirm("Do you want numbers in your password?");
  
  var lowerCases = confirm("Do you want lowercase letters in your password?");
  
  var upperCases = confirm("Do you want uppercase letters in your password?");
  
  var special = confirm("Do you want special characters in your password?");
  
  // Conditional statement to check if user does not include any types of characters. Password generator ends if all four variables evaluate to false
  if(numbers == true || lowerCases == true || upperCases== true ||special == true );
  
  else
  {
    alert("You did not select any of the characters from the list!")
  
   
  }
  // this is a minimum count for numbers, lowerCases, upperCases & specialCharacters
  var minimumCount = 0;
  
  
  // Empty minimums for numbers, lowerCases, upperCases & specialCharacters
  
  var minimumNumbers = "";
  var minimumLowerCases = "";
  var minimumUpperCases = "";
  var minimumSpecialCharacters = "";
  
  
  // Generator functions**
  
   // Variable to store boolean regarding the inclusion of numeric characters
  var functionArray = {
    getNumbers: function() {
    // return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
      return numericCharacters[Math.floor(Math.random() * numericCharacters.length)];
    },
  // Variable to store boolean regarding the inclusion of lowercase characters
  
  
    getLowerCases: function() {
      //return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
      return lowerCasedCharacters[Math.floor(Math.random() * lowerCasedCharacters.length)];
    },
  
    // Variable to store boolean regarding the inclusion of uppercase characters
    getUpperCases: function() {
     // return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
      return upperCasedCharacters[Math.floor(Math.random() * upperCasedCharacters.length)];
    },
  
   // Variable to store boolean regarding the inclusion of special characters
    getSpecialCharacters: function() {
      return specialCharacters[Math.floor(Math.random() * specialCharacters.length)]
    }
  
  };
  
  // Checks to make sure user selected ok for all and uses empty minimums from above
  
  // empty string variable for the for loop below
  var randomPasswordGenerated = "";
  
  // loop getting random characters
  for (let i = 0; i < (parseInt(passwordLength) - minimumCount); i++) {
   
  
    if (numbers === true) {
      minimumNumbers = functionArray.getNumbers();
      minimumCount++;
    
    }
    
    if (lowerCases === true) {
      minimumLowerCases = functionArray.getLowerCases();
      minimumCount++;
    
    }
    
    if (upperCases === true) {
      minimumUpperCases = functionArray.getUpperCases();
      minimumCount++;
    
    }
    
    if (special === true) {
      minimumSpecialCharacters = functionArray.getSpecialCharacters();
      minimumCount++;
    
    }
    
  
  // to make sure characters are added to the password
  randomPasswordGenerated += minimumNumbers;
  randomPasswordGenerated += minimumLowerCases;
  randomPasswordGenerated += minimumUpperCases;
  randomPasswordGenerated += minimumSpecialCharacters;
  
  }
  return randomPasswordGenerated;
  
  }
  
  
  
  
  
  
  // Get references to the #generate element
  var generateBtn = document.querySelector('#generate');
  
  // Write password to the #password input
  function writePassword() {
    var password = getPasswordOptions();
    var passwordText = document.querySelector('#password');
  
    passwordText.value = password;
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener('click', writePassword);
  © 2020 GitHub, Inc.