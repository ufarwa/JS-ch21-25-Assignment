// Q1)Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.
// let firstName = prompt("enter your first name")
// let secondName = prompt("enter your second name")
// let fullName = firstName + " " + secondName
// alert("Hello! welcome "+fullName)




// Q2)Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser
// let favouritePhone = prompt("enter the name of your favourite phone")
// document.write("My favourite phone is: " + favouritePhone)
// document.write("<br>Length of string: " + favouritePhone.length)



// Q3)Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser .

// let word = "Pakistan"
// document.write("String: " + word)
// document.write("<br>Index of 'n': "+ word.indexOf("n"))



// Q4)Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser.
// let word = "Hello World"
// document.write("String: " + word)
// document.write("<br>Last index of 'l': "+ word.lastIndexOf("l"))



// Q5)Write a program to find the character at 3rd index in the
// word “Pakistani” and display the result in your browser.
// let word = "Pakistani"
//  document.write("String: " + word)
//  document.write("<br>Character at index 3: " + word.charAt(3))



// Q6)Repeat Q1 using string concat() method.
// let firstName = prompt("enter your first name")
// let secondName = prompt("enter your second name")
// let fullName = firstName.concat(" " + secondName)
// let greet = "hellow".concat(" "+fullName)
// alert(greet)


// Q7)Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser.
// let city = "Hyderabad"
// let newCity=city.slice(0,0) + "Islam" + city.slice(5,9)
// document.write(newCity)



// Q8)Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and
// football together.”;
//  var message = "Ali and Sami are the best friend.They play cricket and football together"
//  for(var i=0;i<message.length;i++){
//     if(message.slice(i,i+3)==="and"){
//         message=message.slice(0,i)+  "&"+ message.slice(i+3);
//     }
//  }
//  document.write(message)


 
// Q9)Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser.
// let theString= "472"
// let theNumber = +theString
// document.write("Value "+ theString + "<br>")
// document.write("Type: "+ typeof(theString) +"<br>")
// document.write("Value: "+ theNumber +"<br>")
// document.write("Type: "+ typeof(theNumber))




// Q10)Write a program that takes user input. Convert and
// show the input in capital letters.
// let userInput = prompt("enter any word in small case")
// let changeCase =userInput.toUpperCase()
// document.write("User input: " + userInput +"<br>")
// document.write("Upper case: "+ changeCase )



// Q11)Write a program that takes user input. Convert and
// show the input in title case.
// let userInput = prompt("enter any word in small case")
// let firstLetter = userInput.slice(0,1)
// let other = userInput.slice(1)
// let upperCase=firstLetter.toUpperCase()
// document.write("User input: " + userInput + "<br>")
// document.write("Title case: "+upperCase+other)



// Q12)Write a program that converts the variable num to
// string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.
// let myNumber = 35.36
// let myString= myNumber.toString()
// myString=myString.slice(0,2) +  myString.slice(3) 
// document.write("Number: "+ myNumber+" <br>Type of " + myNumber+" "+typeof(myNumber) +"<br><br>")
// document.write("Result: "+ myString+" <br>Type of " + myNumber+" "+typeof(myString))


 
// Q13)Write a program to take user input and store username in a variable. If the username contains any special symbol among [@ . , !], prompt the user to enter a valid username. For character codes of [@
// let userName = prompt("enter your name")
// if (userName.includes===("@") || userName.includes === (".") || userName.includes===("," )|| userName.includes===("!") ){
//   alert("enter valid user name")
// }



// Q14)A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
//Write a program to enable “search by user input” in an
//array. After searching, prompt the user whether the given
//item is found in the list or not.
//Note: Perform case insensitive search. Whether the user
//enters cookie, Cookie, COOKIE or coOkIE, program
//should inform about its availability. Example:

// let A = ["cake","Apple","cookie","chips","patties"]
// var A_lower = A.map(item => item.toLowerCase());
// var user_input = prompt("Welcome to DEline Cakes, What you want to order Sir/Madam");
// var user_input_lower = user_input.toLowerCase();
// if (A_lower.includes(user_input_lower)) {
//     alert(user_input_lower+" is available at our bakery.");
// } else {
//     alert("We are sorry This item is not available in our bakery");
// }



// Q15)Write a program to take password as an input from
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document

// const ascii_of_0 = 48;
// const ascii_of_small_a = 97;
// const ascii_of_capital_A = 65;

// let password = prompt("Enter a password: ");

// let hasLength = password.length >= 6;
// let hasNumber = false;
// let hasSmallAlphabet = false;
// let startsWithNumber = password.charCodeAt(0) >= ascii_of_0 && password.charCodeAt(0) <= 57;

// for (let i = 0; i < password.length; i++) {
//   let charCode = password.charCodeAt(i);
//   if (charCode >= ascii_of_0 && charCode <= 57) {
//     hasNumber = true;
//   } else if (charCode >= ascii_of_small_a && charCode <= 122) {
//     hasSmallAlphabet = true;
//   }
// }

// if (!hasLength) {
//   prompt("Your password must be at least 6 characters long. Please enter a new password.");
// } else if (!hasNumber) {
//   prompt("Your password must contain at least one number. Please enter a new password.");
// } else if (!hasSmallAlphabet) {
//   prompt("Your password must contain at least one small alphabet. Please enter a new password.");
// } else if (startsWithNumber) {
//   prompt("Your password cannot start with a number. Please enter a new password.");
// } else {
//   document.write("Password: " + password);
// }

// Q16)Write a program to convert the following string to an
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.

// let university = "University of Karachi"

// for(i=0;i<university.length;i++){
//     document.write(university[i]+'<br>')
// }

// Q17)Write a program to display the last character of a user
// input.
// let user_input = prompt("enter any word")
// let lastCharacter = user_input.slice(length-1)
// document.write(lastCharacter)

// Q18)You have a string “The quick brown fox jumps over the
// lazy dog”. Write a program to count number of
// occurrences of word “the” in given string.

// let sentence = "The quick brown fox jumps over the lazy dog";
// let word = "the";

// let lowercaseSentence = sentence.toLowerCase();

// let words = lowercaseSentence.split(" ");

// let count = 0;
// for (var i = 0; i < words.length; i++) {
//   if (words[i] === word) {
//     count++;
//   }
// }

// document.write("Number of occurrences of the word 'the': " + count);
