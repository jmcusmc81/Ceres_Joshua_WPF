// Joshua Ceres
// June 12, 2014
//Industry-specific


//I have worked as an Aviation and Production Electronics and Instrumentation Technician for most my adult career. I use a lot of Algebra formulas - Ohm's Law and Boolean's Law.
//These Law's and algebraic formulas help me in my job daily.

//Problem: I have a 480V Motor with 100 Amps Current(I). I need to figure out the Resistance(R) and the Power(W).
//Units of measurement are Volts (E) = Voltage, Amps(I) = Current, Ohms(R) = Resistance, Watts(P) = Power.

var voltage= 480;
var amps=100;
var amps=100;
var resistance=voltage/amps + " Ohms";
console.log(resistance);
var power=voltage*amps + " Watts";
console.log(power);

//Now I am going to reverse the Problem and make sure I get the same results for Voltage and Current.

var watts= 48000;
var ohms= 4.8;
var volts= Math.sqrt (watts * ohms) + " Volts";
console.log(volts);
var current= Math.sqrt (watts / ohms) + " Amps";
console.log(current);

/*
var y = Math.sqrt(16); // Returns the square root of 16
console.log(y);
    */









/**
 * Created by Josh Ceres Industry Specific on 6/12/14.
 */
