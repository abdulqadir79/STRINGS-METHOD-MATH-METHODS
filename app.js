//=========STRING METHODS=========

//Q No-1. Write a program that takes two user inputs for first and
//last name using prompt and merge them in a new variable
//titled fullName. Greet the user using his full name.

 // Prompt the user for their first name
 //var firstName = prompt("Please enter your first name:");
 // Prompt the user for their last name
 //var lastName = prompt("Please enter your last name:");
 // Merge the first and last name into a new variable titled fullName
 //var fullName = firstName + " " + lastName;
 // Greet the user using their full name
 //var greetingMessage = "Hello, " + fullName + "! Welcome!";
 // Display the greeting message in the paragraph with id 'greeting'
 //document.getElementById("greeting").innerText = greetingMessage;

 //Q no-2. Write a program to take a user input about his favorite
//mobile phone model. Find and display the length of user
//input in your browser

  // Prompt the user for their favorite mobile phone model
  //var phoneModel = prompt("Please enter your favorite mobile phone model:");
  // Calculate the length of the user input
  //var length = phoneModel.length;
  // Create the result message
  //var resultMessage = "The length of your input is: " + length;
  // Display the result message in the paragraph with id 'result'
  //document.getElementById("result").innerText = resultMessage;

  //Q no-3. Write a program to find the index of letter “n” in the word
//“Pakistani” and display the result in your browser .

 // The word to search in
 //var word = "Pakistani";
 // Find the index of the letter 'n'
 //var index = word.indexOf('n');
 // Create the result message
 //var resultMessage = "The index of 'n' in 'Pakistani' is: " + index;
 // Display the result message in the paragraph with id 'result'
 //document.getElementById("result").innerText = resultMessage;

 //Q no-4.Write a program to find the last index of letter “l” in the
//word “Hello World” and display the result in your browser.

     // The word to search in
     //var word = "Hello World";
     // Find the last index of the letter 'l'
     //var lastIndex = word.lastIndexOf('l');
     // Create the result message
     //var resultMessage = "The last index of 'l' in 'Hello World' is: " + lastIndex;
     // Display the result message in the paragraph with id 'result'
     //document.getElementById("result").innerText = resultMessage;  
     
// Q no-5. Write a program to find the character at 3rd index in the
//word “Pakistani” and display the result in your browser.

 // The word to search in
 //var word = "Pakistani";
 // Find the character at the 3rd index
 //var character = word.charAt(3);
 // Create the result message
 //var resultMessage = "The character at the 3rd index in 'Pakistani' is: " + character;
 // Display the result message in the paragraph with id 'result'
 //document.getElementById("result").innerText = resultMessage;

 //Q no-6. Repeat Q1 using string concat() method.

 // Prompt the user for their favorite mobile phone model
 //var phoneModel = prompt("Please enter your favorite mobile phone model:");
 // Concatenate the user input to form the full message
 //var resultMessage = "The length of your input is: ".concat(phoneModel.length);
 // Display the result message in the paragraph with id 'result'
 //document.getElementById("result").innerText = resultMessage;

 //Q no-7. Write a program to replace the “Hyder” to “Islam” in the
//word “Hyderabad” and display the result in your browser.

   // The word to search in
   //var word = "Hyderabad";
   // Replace "Hyder" with "Islam"
   //var newWord = word.replace("Hyder", "Islam");
   // Create the result message
   //var resultMessage = "Original word: " + word + "<br>New word: " + newWord;
   // Display the result message in the paragraph with id 'result'
   //document.getElementById("result").innerHTML = resultMessage;

   // Q no-8. Write a program to replace all occurrences of “and” in the
//string with “&” and display the result in your browser.

// The original string
//var originalString = "Sand and wind and water and land";
// Replace all occurrences of "and" with "&"
//var newString = originalString.replace(/and/g, "&");
// Create the result message
//var resultMessage = "Original string: " + originalString + "<br>New string: " + newString;
// Display the result message in the paragraph with id 'result'
//document.getElementById("result").innerHTML = resultMessage;

//Q no-9. Write a program that converts a string “472” to a number
//472. Display the values & types in your browser.

  // The string to convert
  // var str = "472";
  // Convert the string to a number
  //var number = parseInt(str);
  // Create the result message
  //var resultMessage = "Original string: " + str + "<br>Converted number: " + number + "<br>Type of original string: " + typeof str + "<br>Type of converted number: " + typeof number;
  // Display the result message in the paragraph with id 'result'
  //document.getElementById("result").innerHTML = resultMessage;

  //Q no-10. Write a program that takes user input. Convert and
//show the input in capital letters.

//function convertToUpperCase() {
    // Get the user input
    //var userInput = document.getElementById("textInput").value;
    // Convert the input to capital letters
    //var capitalLetters = userInput.toUpperCase();
    // Display the result in the paragraph with id 'result'
   // document.getElementById("result").innerText = "Input in capital letters: " + capitalLetters;

   // Q no-11. Write a program that takes user input. Convert and
//show the input in title case.

//function convertToTitleCase() {
    // Get the user input
    //var userInput = document.getElementById("textInput").value;
    // Convert the input to title case
   // var titleCase = toTitleCase(userInput);
    // Display the result in the paragraph with id 'result'
    //document.getElementById("result").innerText = "Input in title case: " + titleCase;
//}

//function toTitleCase(str) {
   // return str.replace(/\w\S*/g, function(txt) {
       // return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
   // });
//}

// Q no-12. Write a program that converts the variable num to
//string.
//var num = 35.36 ;
//Remove the dot to display “3536” display in your browser.

  // The number to convert
  //var num = 35.36;
  // Convert the number to a string
  //var numString = num.toString();
  // Remove the dot from the string
  //var newString = numString.replace(".", "");
  // Create the result message
  //var resultMessage = "Original number: " + num + "<br>String without dot: " + newString;
  // Display the result message in the paragraph with id 'result'
  //document.getElementById("result").innerHTML = resultMessage;

  // Q no-13. Write a program to take user input and store username
//in a variable. If the username contains any special symbol
//among [@ . , !], prompt the user to enter a valid username.
//For character codes of [@ .

//Note:
//ASCII code of ! is 33
//ASCII code of , is 44
//ASCII code of . is 46
//ASCII code of @ is 64

//function validateUsername() {
    // Get the user input
   // var username = document.getElementById("usernameInput").value;
    // Define the invalid characters
    //var invalidChars = ['@', '.', ',', '!'];
    // Check if the username contains any invalid characters
    //for (var i = 0; i < username.length; i++) {
        //var charCode = username.charCodeAt(i);
       // if (charCode === 33 || charCode === 44 || charCode === 46 || charCode === 64) {
      //      alert("Username contains invalid characters! Please enter a valid username.");
       //     return;
       // }
    //}
    // If valid, display the username
    //document.getElementById("result").innerText = "Valid username: " + username;
//}
 

// Q no-14. You have an array
//A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
//Write a program to enable “search by user input” in an
//array. After searching, prompt the user whether the given
//item is found in the list or not.
//Note: Perform case insensitive search. Whether the user
//enters cookie, Cookie, COOKIE or coOkIE, program
//should inform about its availability. Example:

  // Array of items
  //var items = ["cake", "apple pie", "cookie", "chips", "patties"];

  //function searchItem() {
      // Get the user input
      //var userInput = document.getElementById("searchInput").value.trim().toLowerCase();
      // Check if the item is in the array
      //var found = items.some(function(item) {
      //    return item.toLowerCase() === userInput;
      //});

      // Display the result
      //if (found) {
      //    document.getElementById("result").innerText = userInput + " is available in the list.";
      //} else {
     //     document.getElementById("result").innerText = userInput + " is not available in the list.";
     // }
  //}

  // Q no-15. Write a program to take password as an input from
//user. The password must qualify these requirements:
//a. It should contain alphabets and numbers
//b. It should not start with a number
//c. It must at least 6 characters long
//If the password does not meet above requirements,
//prompt the user to enter a valid password.
//For character codes of a-z, A-Z & 0-9, refer to ASCII
//table at the end of this document.

//function validatePassword() {
    // Get the password input
   // var password = document.getElementById("passwordInput").value;
  //  var resultMessage = "";

    // Check if the password meets the requirements
   // if (password.length < 6) {
   //     resultMessage = "Password must be at least 6 characters long.";
   // } else if (!/[a-zA-Z]/.test(password) || !/[0-9]/.test(password)) {
   //     resultMessage = "Password must contain both alphabets and numbers.";
   // } else if (/^[0-9]/.test(password)) {
  //      resultMessage = "Password should not start with a number.";
  //  } else {
   //     resultMessage = "Password is valid.";
  //  }

    // Display the result
  //  document.getElementById("result").innerText = resultMessage;
//}

// Q no-16. Write a program to convert the following string to an
//array using string split method.
//var university = “University of Karachi”;
//Display the elements of array in your browser.

    // The string to convert
    //var university = "University of Karachi";
    // Convert the string to an array
    //var array = university.split(" ");
    // Display the elements of the array
    //var result = "";
    //for (var i = 0; i < array.length; i++) {
      //  result += array[i] + "<br>";
    //}
    //document.getElementById("result").innerHTML = result;

    // Q no-17. Write a program to display the last character of a user
//input.

//function displayLastCharacter() {
    // Get the user input
   // var input = document.getElementById("userInput").value;
    // Get the last character of the input
   // var lastCharacter = input.charAt(input.length - 1);
    // Display the last character
  //  document.getElementById("result").innerText = "Last character: " + lastCharacter;
//}

// Q no-18. You have a string “The quick brown fox jumps over the
//lazy dog”. Write a program to count number of
//occurrences of word “the” in given string.

//function countOccurrences() {
    // The string to search
   // var str = document.getElementById("inputString").innerText;
    // Convert the string to lowercase for case-insensitive search
   // var lowerStr = str.toLowerCase();
    // The word to count
   // var word = "the";
    // Split the string into an array of words
   // var wordsArray = lowerStr.split(" ");
    // Count occurrences of the word
   // var count = 0;
    //for (var i = 0; i < wordsArray.length; i++) {
      //  if (wordsArray[i] === word) {
      //      count++;
      //  }
    //}
    // Display the result
   // document.getElementById("result").innerText = "Number of occurrences of the word 'the': " + count;
//}

// Call the function to count occurrences
//countOccurrences();


//=============MATH METHODS==========

// Q no-1. Write a program that takes a positive integer from user &
//display the following in your browser.
//a. number
//b. round off value of the number
//c. floor value of the number
//d. ceil value of the number

//function displayNumberInfo() {
    // Get the user input
   // var num = parseFloat(document.getElementById("numberInput").value);

    // Check if the input is a positive number
   // if (isNaN(num) || num <= 0) {
    //    alert("Please enter a valid positive number.");
    //    return;
    //}

    // Calculate the required values
  /// var roundValue = Math.round(num);
    //var floorValue = Math.floor(num);
   // var ceilValue = Math.ceil(num);

    // Display the results
    //var resultMessage = 
     //   "Number: " + num + "<br>" +
      //  "Round off value: " + roundValue + "<br>" +
       // "Floor value: " + floorValue + "<br>" +
        //"Ceil value: " + ceilValue;

   // document.getElementById("result").innerHTML = resultMessage;
//}

// Q no-2. Write a program that takes a negative floating point
//number from user & display the following in your browser.
//a. number
//b. round off value of the number
//c. floor value of the number
//d. ceil value of the number

//function displayNumberInfo() {
    // Get the user input
    //var num = parseFloat(document.getElementById("numberInput").value);

    // Check if the input is a negative number
    //if (isNaN(num) || num >= 0) {
      //  alert("Please enter a valid negative floating point number.");
      //  return;
    //}

    // Calculate the required values
   // var roundValue = Math.round(num);
    //var floorValue = Math.floor(num);
    //var ceilValue = Math.ceil(num);

    // Display the results
    //var resultMessage = 
      //  "Number: " + num + "<br>" +
      //  "Round off value: " + roundValue + "<br>" +
       // "Floor value: " + floorValue + "<br>" +
       // "Ceil value: " + ceilValue;

    //document.getElementById("result").innerHTML = resultMessage;
//}

// Q no-3. Write a program that displays the absolute value of a
//number.
//E.g. absolute value of -4 is 4 & absolute value of 5 is 5

//function displayAbsoluteValue() {
    // Get the user input
  //  var number = parseFloat(document.getElementById("numberInput").value);

    // Calculate the absolute value
   // var absoluteValue = Math.abs(number);

    // Display the absolute value
  //  document.getElementById("result").innerText = "Absolute value: " + absoluteValue;
//}

//Q no-4. Write a program that simulates a dice using random()
//method of JS Math class. Display the value of dice in your
//browser.:

//function rollDice() {
    // Generate a random number between 1 and 6 (inclusive)
   // var diceValue = Math.floor(Math.random() * 6) + 1;
    
    // Display the result in the browser
  //  document.getElementById("result").innerText = "Dice value: " + diceValue;
//}

// Q no-5. Write a program that simulates a coin toss using random()
//method of JS Math class. Display the value of coin in your
//browser

//function tossCoin() {
    // Generate a random number between 0 and 1
  //  var tossResult = Math.random();
    
    // Determine the result based on the random number
   // var coinValue = tossResult < 0.5 ? "Heads" : "Tails";
    
    // Display the result in the browser
   // document.getElementById("result").innerText = "Coin value: " + coinValue;
//}

// Q no-6. Write a program that shows a random number between 1
//and 100 in your browser.

//function generateRandomNumber() {
    // Generate a random number between 1 and 100
   // var randomNumber = Math.floor(Math.random() * 100) + 1;
    
    // Display the random number in the browser
   // document.getElementById("result").innerText = "Random number: " + randomNumber;
//}

// Q no-7. Write a program that asks the user about his weight. Parse
///the user input and display his weight in your browser.
//Possible user inputs can be:
//a. 50
//b. 50kgs
//c. 50.2kgs
//d. 50.2kilograms

/*function parseWeight() {
    // Get the user input
    var userInput = document.getElementById("weightInput").value.trim().toLowerCase();

    // Regular expression to match the weight format
    var regex = /^(\d+(\.\d+)?)(kgs|kilograms)?$/;

    // Parse the input
    var match = userInput.match(regex);

    // Check if the input matches the format
    if (match) {
        // Extract the weight value
        var weight = parseFloat(match[1]);

        // Display the weight in the browser
        document.getElementById("result").innerText = "Your weight is: " + weight + " kgs";
    } else {
        // Display an error message if the input is invalid
        document.getElementById("result").innerText = "Invalid input. Please enter a valid weight.";
    }
} */

// Q no-8. Write a program that stores a random secret number from
//1 to 10 in a variable. Ask the user to input a number
//between 1 and 10. If the user input equals the secret
//number, congratulate the user.

 // Generate a random secret number between 1 and 10
 /*var secretNumber = Math.floor(Math.random() * 10) + 1;

 function checkGuess() {
     // Get the user input
     var userGuess = parseInt(document.getElementById("guessInput").value);

     // Check if the input is valid
     if (userGuess >= 1 && userGuess <= 10) {
         // Check if the user input equals the secret number
         if (userGuess === secretNumber) {
             document.getElementById("result").innerText = "Congratulations! You guessed the secret number!";
         } else {
             document.getElementById("result").innerText = "Sorry, try again!";
         }
     } else {
         // Display an error message if the input is not between 1 and 10
         document.getElementById("result").innerText = "Please enter a number between 1 and 10.";
     }
 } */

 //Q no-