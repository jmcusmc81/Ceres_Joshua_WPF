//Joshua Ceres
//June 16 2014
//Conditional Worksheet

//Group 1 Expressions with Conditionals

//Celsius to Fahrenheit converter

//Convert a temperature to either degrees Celsius or degrees Fahrenheit depending on what the user has entered.
//If the user puts a “C” for the unit, the calculator should convert to Celsius.
//If the user puts “F” for the unit, the calculator should convert to Fahrenheit.

//Formula for Celsius to Fahrenheit (°C × 9/5) + 32 = °F or °C × 1.8 + 32 = °F
//Formula for Fahrenheit to Celsius (°F - 32) x 5/9 = °C or (°F - 32) x 1.8 = °C
/*
var temperatureF = (userInput - 32) / 1.8;

var userInputDegrees = prompt ("Please enter F for Fahrenheit to Celsius conversion \n or C for Celsius to Fahrenheit conversion");

var userInput = prompt ("Please enter Temperature");
console.log(temperatureF);
    */

//I could not figure out how to get his info into a promt and make it work

//Last Chance for Gas!

//A driver has to determine if they can make it across the desert with their current fuel.
//They are about to past the last gas station for the next 200 miles and they need to determine whether they should stop now for gas or not.



//Car gets 20 mpg and has a 20 Gallon Tank. 20x20=400

//so if 50% > okay ; else stop

var gasTankHalf = .50; //half a tank minimum needed to make the trip.
var gasTankCurrent = .40;

if (gasTankCurrent > gasTankHalf){
    console.log("Yes, you can make it without stopping for gas!");

}else{
    console.log("You only have 40% gallons of gas in your tank, better get gas now while you can!")
}



/**
 * Created by Josh on 6/16/14.
 */
