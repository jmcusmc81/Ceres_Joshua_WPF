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

var movies = 6;

function movieYesorNO(){
    var movieDecision = chores + listening + fighting + repeat;
    console.log(movieDecision);
}
movieYesorNO();