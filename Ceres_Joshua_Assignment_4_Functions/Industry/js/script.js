/**
 * Created by Josh on 6/26/14.
 */
//Joshua Ceres
//Wed June 26, 2014
//Assignment 4:Functions

//Going to focus on username, password and security input. That seems like it would be a big part of my job in my industry.
//I am having to login to every site I go on it seem like.
//Its quite annoying honestly and I forget my passwords and usernames all the time.

var userLogin = prompt("Please enter your Username");//User Input

while(userLogin===""){  //Loop to validate prompt if nothing is entered
    userLogin = prompt("Please enter you Username to continue"); //Re-prompt
}

console.log(userLogin);

var userPassword = prompt("Please enter your password"); //User Input Password

while(userPassword===""){ //Loop to validate
    userPassword = prompt("Please enter your password to continue");
}
console.log(userPassword);

var securityInput = prompt("Please enter you security input number"); //Security Input, numbers only.

while (isNaN(securityInput)){ //Is not a number
    securityInput = prompt("Please enter your security input number to continue"); //Validate and re-prompt if a number is not entered
}
console.log(securityInput);

//Everything checked out fine with minor hiccups. I forgot to double parenthesis the -- (isNan(   )) -- which was giving me and error when it went to console.