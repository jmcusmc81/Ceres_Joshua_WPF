/**
 * Created by Josh on 6/26/14.
 */
//Joshua Ceres
//Wed June 26, 2014
//Assignment 4:Functions

//I am going to be doing a budget for my sons birthday party that is coming up next month.

//Birthday Party

//Named Function

function birthdayParty1(){ //Parameters are empty for now
    var cake = 40;
    var venue = 100;
    var presents = 100;
    var totalCost = cake + venue + presents;//Code to run
    console.log(totalCost + " dollars is the total cost of the party");
}

birthdayParty1()//Invoke

//Now I am going to add and argument

var budget = 300;
birthdayParty1(budget);//Argument
var finalCost = birthdayParty1(budget - totalCost);

function birthdayParty1(){ //Parameters are empty for now
    var cake = 40;
    var venue = 100;
    var presents = 100;
    var totalCost = cake + venue + presents;//Code to run
    console.log(totalCost + " dollars is the total cost of the party");
    return totalCost;
}
console.log(finalCost);