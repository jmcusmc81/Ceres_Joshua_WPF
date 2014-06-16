//Conditionals Week 3
/*
if(sunny){
    goToTheBeach();

    if(warmWater){
        wearNewSwimSuit();
    }


}else{
    gotToTheMovies();
}
 */
//Conditional Logic-else if
/*
var kidHeight=46;
var minHeight=48;
var wParentHeight=45;
//var sneakerLift=2;

//if the child is old enough print to the console
//if the kid height is over 48 inches in height
if(kidHeight>minHeight){
    //code performed if condition is true
    console.log("You can ride the coaster!");
}else if(kidHeight>wParentHeight){
    //you can ride with a parent present
    console.log("You can ride, but only with a parent present.");
}else{
    //sorry kid you have growing to do
    console.log("Sorry kid you got some growing to do!");
}
    */

//Conditional Logic - Logical Operators
/*
var budget=100;
var  iPhonePrice=199.99;
var wonLottery=true;

if(iPhonePrice<budget || wonLottery){
   console.log("We can buy the phone!");
}else{
    console.log("No phone for you!!");
}
/*
if(paycheck>300){
    console.log("we can buy the phone!");
}else{
    console.log("No phone for you!!");
}

    */

//if the price of our phone is less then our budget AND if our paycheck is over 300


//Logical Operators - Ternary Operators
/*
if(condition){
    do if true;
}else{
    do if false;
}
    */

var gpa =48;
//if the gpa is over the min 2.0 score, the student can graduate
/*if(gpa>2.0){
    console.log("You can graduate!");
}else{
    console.log("GPA is too low!");
}*/

(gpa>2.0) ? console.log("You can graduate!") : console.log("GPA is too low!");

/**
 * Created by Josh on 6/16/14.
 */
