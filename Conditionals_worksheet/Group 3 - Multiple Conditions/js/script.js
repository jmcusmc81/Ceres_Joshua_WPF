/**
 * Created by Josh on 6/18/14.
 */
//Joshua Ceres
//June 18, 2014
//Conditional worksheet Group 3

//Group 3 Multiple Conditions

//Movie Ticket Price

//The local movie theater in town has a ticket price of $12.00 but if you are a senior (55 and older), under 10 you get the discounted price of $7.00.
//In addition, if a customer is seeing a movie between 3pm and 5pm they can also get the discounted price.
//Determine which of the two prices the customer is eligible for.

//Given: age is 40

//Time of Movie (Assume whole numbers here)
//Age of the customer
//Result To Print Out:
//“The ticket price is X"

var age = 20;
var time = 4;

if(age > 55 && time < 5){
    console.log("The ticket price is $7.00");
}else if(time >= 3 && age <= 10){
    console.log("The ticket price is $7.00");
}else{
    console.log("The ticket price is $12.00");
}