/**
 * Created by Josh on 6/24/14.
 */
//Functions - Basic Structures

//Functions have same structure as condtionals

// function functionName(are for parameters){
// code the function runs
// curly bracers are for blocks of code }


//functions have names so we can refer to them later


function outputMsg(){
    console.log("Hello World");

}

function calcArea(){
    var width = 20;
    var height = 30;
    var area = width* height;
    console.log(area);
}

calcArea();

funcName(argument1, argument2);

function funcName(parameter1, parameter2){
    //code that function runs
}

calcArea(30, 20);

function calcArea(w, h){  //w=30, h=20
    var area = w * h;
    console.log(area);
}
/*
function dogYears(){
    var age = 4;
    var dogYears = age * 7;
    console.log("Sparky is " + dogYears + " years old.");
}

dogYears();
        */

function dogYears(age){//parameters
    var dogYears = age * 7;
    console.log("Sparky is " + dogYears + " years old.");
}

dogYears(4);
dogYears(6);//arguments

