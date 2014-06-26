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

var finalCost = birthdayParty2(300);

function birthdayParty2(budget){ //Parameter
    var cake = 40;
    var venue = 100;
    var presents = 100;
    var totalCost = cake + venue + presents;//Code to run
    var finalCost = budget - totalCost;//Code to run then return
    return finalCost;
}
console.log(finalCost + " dollars is what you have left after the money is spent on everything for the party");

//Going to add a conditional statement to let the user knows if its in the budget range to go to the party

if(birthdayParty1 < birthdayParty2){
    alert("You are within your budget to have the birthday party");
    console.log("You are within your budget to have the birthday party");
}else{
    alert("You are not within your budget to have the birthday party");
    console.log("You are not within your budget to have the birthday party");
}

