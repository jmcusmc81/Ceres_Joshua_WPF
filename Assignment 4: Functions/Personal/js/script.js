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

//Adding more parameters and arguments

var birthdayParameters = birthdayParty3(40, 150, 150);//Argument

function birthdayParty3(cake, venue, presents){//Parameters
    var totalCost = cake + venue + presents;//Code to run
    return totalCost; //Return to var birthday parameters
    console.log ("The total cost of your birthday party is " + totalCost + " dollars");
}


console.log("The total cost of your birthday party is " + birthdayParameters + " dollars");

if (budget > birthdayParameters){
    console.log("You have enough money to have the party!!");
}else{
    console.log("You do not have enough money to have the party");
}

//Anonymous Functions

//Example
//var functionName = function(){ //Defining
        //code the function runs
// }


//Var a = functionName ( ); //Invoking

//console.log(a);
//Example ended

var birthdayParty4 = function(cake, venue, presents){  //Defining
    var partyCost = cake + venue + presents; //Code to run
    return partyCost; //Return
}

var anon1 = birthdayParty4(40,200,150); //Invoking
console.log(anon1 + " dollars is the cost of your party");


var birthdayParty5 = function(budget, b){ //Defining
    var deductedCost = budget - b; //Code to run
    return deductedCost;
}

var b = birthdayParty5(300,anon1);// Invoking
console.log(b + " dollars is the amount you have after party costs are deducted from budget"); //Print out the return sum of the code that was run


//Else if

if (anon1 > budget){
    console.log("Great news!! You have enough for the party!!")

}else if{
    
}

