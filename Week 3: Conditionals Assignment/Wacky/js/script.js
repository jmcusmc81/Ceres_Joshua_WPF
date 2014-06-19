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

var today = new Date();
console.log(today);

var userInput = prompt("Please enter your birth date \n MM/DD/Year");

var age = today - userInput;
alert(age);