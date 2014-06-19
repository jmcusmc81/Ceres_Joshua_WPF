/**
 * Created by Josh on 6/18/14.
 */
//Joshua Ceres
//June 18, 2014
//Week 3 Graded Assignment:Conditionals

//I am going to attempt to predict my date night with my wife for Sunday for out Anniversary.
//We tend to eat and get tired afterwards. We always have intentions to go dancing and do something fun after we eat, but it seldom happens.
//So I am going to start by using a sliding scale of 1-10 for energy level.
//My Given energy level is 10 before we go to eat for both of us. (Whatever she is feeling I feel the same way.)



var energyLevel = 1; //Given
var dancing = (energyLevel > 5); //Energy level needs to be higher then 5 for a night out after dinner.
var wEnergyDrink = 2; //Boosts our energy levels.

if(dancing) {
    console.log("Lets go dancing!"); //After a nice dinner its nice to go dancing with the wife.
}else if (energyLevel + wEnergyDrink > 5){
    console.log("Lets go dancing!"); //added else if Condition. Energy drink gives some boost to energy levels.
}else{
    console.log("Lets go for a walk.");//Sometimes after a nice dinner we are to tired and just want to go for a walk.
}
//Changed Conditional Statement and added else if.

//Ternary
//Going to change the conditional statement to ternary operators.

/*
var energyLevel = 6;
var dancing;

dancing = (energyLevel > 5) ? "Lets go dancing!" : "Lets go for a walk.";
console.log(dancing);
    */
//Ternary Operators worked out well for this statement.

