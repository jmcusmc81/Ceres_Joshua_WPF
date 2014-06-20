/**
 * Created by Josh on 6/19/14.
 */
/*
 Joshua Ceres
 June 19, 2014
 Week 3 Conditionals Assignment
 Wacky
 */

//I am going to attempt some prompts for this part of the assignment.

var d = new Date();//Trying out some new code from w3schools
console.log(d);

var date = d.getFullYear();//I want to get the year and then subtract the userInput from the year to get age
console.log(date);

var userInput = prompt("Please enter your birth date \n Year only");//propmt to get the year the user is born

var age = date - userInput;//Now I am subtracting userInput from current year
alert("Your age is " + age + " years old");//Now we tell the user his/her age


//I want to make this if,else if, else statement and conditions have a funny result.

if(age > 35){
    console.log("Boy you are Old! You better get some adult diapers." + alert ("Boy you are Old! You better get some adult diapers.") );
}else if(age < 18){
    console.log("You are very young! You are still in diapers." + alert ("You are very young! You are still in diapers.") );
}else{
    console.log("You are young and still have some good times ahead!" + alert ("You are young and still have some good times ahead!") );
}


//This took me quite awhile. I get sidetracked so much while trying to complete assignments.
//This assignment took me all day. Having children home and a newborn makes this very hard to do this class.
//Hard to keep my train of thought in my household. I have to go over the material a few times to absorb the information again.

//All in all this was a fun project and took a huge amount of time. I get side tracked to easily and tr to make the work harder then it really is.