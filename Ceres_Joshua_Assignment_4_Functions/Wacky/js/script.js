/**
 * Created by Josh on 6/26/14.
 */
//Joshua Ceres
//Wed June 26, 2014
//Assignment 4:Functions

//This is my wacky part of my Function assignment.
//Going to make this simple ternary yes or no for my kids if they behave the entire day I will take them to the movies if they do not
//Then they will be grounded the entire next day
//They will get 2 points for doing chores, 2 points for listening, 2 points for not fighting or arguing, and 2 points for not repeating myself.
//They need to get a 6 or higher to be able to go to the movies.


var chores = 2;
var listening = 2;
var fighting = 2;
var repeat = 2;
//I purposely put the variables outside the function because they will only be added in if they get completed.
var movies = 6; //Goal

var movieDecision = movieYesorNO(chores,repeat);//Argument

function movieYesorNO(chores, repeat){ //Parameters
    var movieDecision = chores + repeat;
    return movieDecision; //Returns the sum to the var movieDecision //Spits out the information
}
console.log(movieDecision);

//Logical Operators - Ternary Operators
/*
 if(condition){
 do if true;
 }else{
 do if false;
 }
 */

//Ternary

/*(Condition) ? console.log("If Statement") : console.log("Else Statement");*/

var moviesGo;

moviesGo = (movieDecision >= movies) ? alert ("You are allowed to go to the movies") : alert ("You are not allowed to go to the movies");