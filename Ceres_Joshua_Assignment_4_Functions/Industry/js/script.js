/**
 * Created by Josh on 6/26/14.
 */
//Joshua Ceres
//Wed June 26, 2014
//Assignment 4:Functions

//Going to focus on username, password and security input. That seems like it would be a big part of my job in my industry.
//I am having to login to every site I go on it seem like.
//Its quite annoying honestly and I forget my passwords and usernames all the time.

var userLogin = prompt("Please enter your Username");

while(userLogin===""){
    userLogin = prompt("Please enter you Username to continue");
}

console.log(userLogin);

var userPassword = prompt("Please enter your password");

while(userPassword===""){
    userPassword = prompt("Please enter your password to continue");
}
console.log(userPassword);