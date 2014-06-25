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

//c = 2x pi x r  //Circumference formula
//Given will be Radius which 5

var r = 5; //Given
var pi = 3.14;
var c = circumference(2 * pi * r);//Argument
console.log("The circumference of the circle is " +c);

function circumference(r, pi){
    return r * pi * 2;
    console.log(c);
}
