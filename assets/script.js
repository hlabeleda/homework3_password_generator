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
var upperCaseLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowerCaseLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numericCase = [0,1,2,3,4,5,6,7,8,9];
var specialCase = ["!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]","|",";","'","<",",",">",".","?","/"];

//assigns a variable to each user input when asked what they want in their password
var verifyLowerCase;
var verifyUpperCase;
var verifyNumericCase;
var verifySpecialCase;
var userChoices; //used to concat together user's choices then randomly select from this list.

function generatePassword() {
  var userConfirm = window.confirm("Would you like to generate a password?");//window.confirm gives ok or cancel, returns a boolean.

  if (!userConfirm) {// if user hits cancel, message below appears.  "if !userChoice" mean if it's not equal as userChoice, then place a message "thank you...", return stops the function. Worked with my TA to adjust this from window.confirm to boolean.
    alert("Thank you for using Password Generator.");
    return;
  
  } 

  
  
  if (userConfirm) {
    var pwLength = window.prompt("Please choose the length of the password.  Must be at least 8 characters but no more than 128 characters.");//made a var named pwLength to the window prompt that user types in, so it assigns the number the user chooses to a variable. then we use that variable to pick the number or random characters
    // console.log("User chosen number", pwLength)//displays the number that the user picks.
    // worked with my TA to adjus this from window.confirm to boolean.

    if (pwLength < 8 || pwLength > 128) {//if user picks less than 8 or more than 128, program stops. Forces user to pick between 8 to 128 characters.
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
      userChoices = lowerCaseLetters.concat(upperCaseLetters, numericCase, specialCase); //combines together the users choice if user picked ok on all 4 choices.

    } //combines together the users choice if user picked ok on 3 choices
      else if (verifyLowerCase && verifyUpperCase && verifyNumericCase) {
        userChoices = lowerCaseLetters.concat(upperCaseLetters, numericCase);

      }

      else if (verifyLowerCase && verifyUpperCase && verifySpecialCase) {
        userChoices = lowerCaseLetters.concat(upperCaseLetters, specialCase);

      }

      else if (verifyUpperCase && verifyNumericCase && verifySpecialCase) {
        userChoices = upperCaseLetters.concat(numericCase, specialCase);

      }
      
      else if (verifyLowerCase && verifyNumericCase && verifySpecialCase) {
        userChoices = lowerCaseLetters.concat(numericCase, specialCase);

      }
      // combines together users choice if user picked ok on 2 choices
      //concat works the same as += to combine options
      else if (verifyLowerCase && verifyUpperCase) {
        userChoices = (lowerCaseLetters += upperCaseLetters);

      }

      else if (verifyLowerCase && verifyNumericCase) {
        userChoices = (lowerCaseLetters += numericCase);

      }

      else if (verifyLowerCase && verifySpecialCase) {
        userChoices = (lowerCaseLetters += specialCase);

      }
      
      else if (verifyUpperCase && verifyNumericCase) {
        userChoices = (upperCaseLetters += numericCase);

      }

      else if (verifyUpperCase && verifySpecialCase) {
        userChoices = (upperCaseLetters += specialCase);

      }

      else if (verifyNumericCase && verifySpecialCase) {
        userChoices = (numericCase += specialCase);

      }
      //if user picks only one criteria
      else if (verifyLowerCase) {
        userChoices = (lowerCaseLetters);

      }
    
      else if (verifyUpperCase) {
        userChoices = (upperCaseLetters);

      }

      else if (verifyNumericCase) {
        userChoices = (numericCase);

      }

      else if (verifySpecialCase) {
        userChoices = (specialCase);

      }

      var userPwdGenLength = [];//variable userPwdGenLength is placeholder for user desired password length


    for (let i = 0; i < pwLength; i++) { //loops through the length that the user chooses to pick a random character
      // console.log("generate a random value here");//console just to see if i'm getting results.

      //assigns variable name randomChar to the user's choice of character options and loops throught the length of the array
      var randomChar = userChoices[Math.floor(Math.random() * userChoices.length)];
      userPwdGenLength.push(randomChar);//result from randomChar variable is then placed in userPwdGenLength. each character placed at the end of the array.
      // console.log("password?", randomChar);//console just to see if i'm getting results.
      
    }
  }  
    //couldn't get the password to generate onto textarea #password.  found this line of code online.  
     var passResult = userPwdGenLength.join("");// .join makes userPwdGenLength into a string
     UserInput(passResult);
     return passResult;

     //also used this line of code but i'm not sure why it's necessary.  I get that we're placing the result from passResult variable, into textarea #password, but I thought since passwordText.value = password, and password variable is generatePassword function, shouldn't the result of generatePassword function get passed onto password variable, then onto passwordText, which is assigned to #password?
     function UserInput(passResult) {
      document.querySelector("#password").textContent = passResult;

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

 


