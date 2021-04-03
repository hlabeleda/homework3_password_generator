// Assignment Code
var generateBtn = document.querySelector("#generate"); //this assigns variable named generateBtn to the button id="generate" in index.html

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//variables for password list
var upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
var numericCase = "0123456789";
var specialCase = "!@#$%^&*()_-+={[}]|;'<,>.?/";

//assigns a variable to each user input when asked what they want in their password
var verifyLowerCase;
var verifyUpperCase;
var verifyNumericCase;
var verifySpecialCase;
var userChoices; //used to concat together user's choices then randomly select from this list.

function generatePassword() {
  var userConfirm = window.confirm("Would you like to generate a password?");//window.confirm gives ok or cancel, returns a boolean.

  if (!userConfirm) {// if user hits cancel, message below appears.  "if !userChoice" mean if it's not equal as userChoice, then place a message "thank you...", return stops the function.
    alert("Thank you for using Password Generator.");
    return;
  
  } 

  var password = ""//var password is where we would assign a random character
  
  if (userConfirm) {
    var length = window.prompt("Please choose the length of the password.  Must be at least 8 characters but no more than 128 characters.");//made a var named length to the window prompt that user types in, so it assigns the number the user chooses to a variable. then we use that variable to pick the number or random characters
    // console.log("User chosen number", length)//displays the number that the user picks.

    if (length < 8 || length > 128) {//if user picks less than 8 or more than 128, program stops. Forces user to pick between 8 to 128 characters.
      alert("Please choose again. Must be at least 8 characters but no more than 128 characters.");
      return;

    } else {
        verifyLowerCase = confirm("Would you like lowercase letters?");//assigns the user's input to variable verifyLowerCase.  we can then compare each one using operators
        verifyUpperCase = confirm("Would you like uppercase letters?");//assigns the user's input to variable verifyUpperCase
        verifyNumericCase = confirm("Would you like numbers?");//assigns the user's input to variable verifyNumericCase
        verifySpecialCase = confirm("Would you like special characters?");//assigns the user's input to variable verifySpecialCase
    };

    //if statements for user's choices
    if (!verifyLowerCase && !verifyUpperCase && !verifyNumericCase && !verifySpecialCase) { //if user picks cancel, alerts them to make a selection and starts it over.
      alert("Please make a selection to use Password Generator.")
      return;

    };

    if (verifyLowerCase && verifyUpperCase && verifyNumericCase && verifySpecialCase) {
      userChoices = (verifyLowerCase += verifyUpperCase += verifyNumericCase += verifySpecialCase); //combines together the users choice if user picked ok on all 4 choices.

    } //combines together the users choice if user picked ok on 3 choices
      else if (verifyLowerCase && verifyUpperCase && verifyNumericCase) {
        userChoices = (verifyLowerCase += verifyUpperCase += verifyNumericCase);

      }

      else if (verifyLowerCase && verifyUpperCase && verifySpecialCase) {
        userChoices = (verifyLowerCase += verifyUpperCase += verifySpecialCase);

      }

      else if (verifyUpperCase && verifyNumericCase && verifySpecialCase) {
        userChoices = (verifyUpperCase += verifyNumericCase += verifySpecialCase);

      }
      
      else if (verifyLowerCase && verifyNumericCase && verifySpecialCase) {
        userChoices = (verifyLowerCase += verifyNumericCase += verifySpecialCase);

      }
      // combines together users choice if user picked ok on 2 choices
      else if (verifyLowerCase && verifyUpperCase) {
        userChoices = (verifyLowerCase += verifyUpperCase);

      }

      else if (verifyLowerCase && verifyNumericCase) {
        userChoices = (verifyLowerCase += verifyNumericCase);

      }

      else if (verifyLowerCase && verifySpecialCase) {
        userChoices = (verifyLowerCase += verifySpecialCase);

      }
      
      else if (verifyUpperCase && verifyNumericCase) {
        userChoices = (verifyUpperCase += verifyNumericCase);

      }

      else if (verifyUpperCase && verifySpecialCase) {
        userChoices = (verifyUpperCase += verifySpecialCase);

      }

      else if (verifyNumericCase && verifySpecialCase) {
        userChoices = (verifyNumericCase += verifySpecialCase);

      }
      //if user picks only one criteria
      else if (verifyLowerCase) {
        userChoices = (verifyLowerCase);

      }
    
      else if (verifyUpperCase) {
        userChoices = (verifyUpperCase);

      }

      else if (verifyNumericCase) {
        userChoices = (verifyNumericCase);

      }

      else if (verifySpecialCase) {
        userChoices = (verifySpecialCase);

      }




    for (let i = 0; i < length; i++) { //loops through the length that the user chooses to pick a random character
      console.log("generate a random value here");
      //how to generate random char

      var password = userChoices[Math.floor(Math.random() * userChoices.length)];
      console.log("password?", password);
      // password = password + randomChar //
    }
  }  


  //function that runs to generate a random number between 8 and 128
  /*function getRandomNumber(min,max) {
  var min = 8;
  var max = 128;

  min = Math.ceil(min);
  max = Math.floor(max);
  var userAnswer = Math.floor(Math.random() * (max - min + 1) + min);

  console.log("What am i", userAnswer);

  }

  getRandomNumber()*/




}//this bracket is the end of the generatePassword function

 


