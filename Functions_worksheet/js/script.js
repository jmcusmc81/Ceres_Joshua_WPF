/**
 * Created by Josh on 6/25/14.
 */
//Joshua Ceres
//Wed June 25, 2014
//Functions Worksheet


//Calculate the Area of a Rectangle
var width = 5; //Given
var height = 6; //Given
var area = calculateArea(width, height); //Argument
console.log("The area of a rectangle is " + area);

function calculateArea(w, h )  //w = 5 and h = 6 , parameters
{
    return w *h; //code to be executed
}

//Identifiers, in the function definition, are called parameters.
//Values received by the function, when the function is invoked, are called arguments. Example - var x = myFunction(4, 3)


//Problem 1 Calculate the circumference of a circle.

/*Circumference

 Calculate the circumference of a circle.

 Parameter(s) for function:
    Radius of the circle

 Return:
    Circumference of the circle

 Result to print to the console:
    “The circumference of the circle is X”;
    */

 //c = 2x pi x r  //Circumference formula
//Given will be Radius which 5

var r = 5; //Given
var pi = 3.14;
var c = circumference(pi, r);//Argument
console.log("The circumference of the circle is " +c);

function circumference(r, pi){
    return (r * pi) * 2;

}
//It should print out 31.4 for the answer




/*
Problem 2

 Stung!

 It takes 8.666666667 bee stings per pound to kill an animal. Calculate how many bee stings are needed to kill an animal in a function

 Given:
     Victim’s weight (in pounds)

 Parameter(s) for function:
    Victim’s weight (in pounds)

 Return:
    Number of Bee stings

 Result to print to the console:
    “It takes X bee stings to kill this animal.

 */

// 8.7 bee stings per 1 lb
// stings x weight = how many stings it would take to kill an animal of that weight.


