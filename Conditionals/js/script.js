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
/**
 * Created by Josh on 6/16/14.
 */
