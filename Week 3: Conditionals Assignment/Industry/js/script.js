/**
 * Created by Josh on 6/19/14.
 */
/*
Joshua Ceres
June 19, 2014
Week 3 Conditionals Assignment
Industry
 */

//I am going to write a code if and else statement for checking to make sure all folders and files are present for initial setup of a web assignment
//These folders are "css","images","js". The files are "index.html", and "script.js"


var webInitialFolders = ["css","images","js"];

for(var i = 0; i<webInitialFolders.length; i++)

if(webInitialFolders[i] === "css"){
    console.log ("Good job! You have the css folder." + alert("Good job! You have the css folder."));

}else{
    console.log("You are missing the css folder");
}
for(var d = 0; d<webInitialFolders.length; d++)

    if(webInitialFolders[d] === "mages"){
        console.log ("Good job! You have the images folder." + alert("Good job! You have the images folder."));

    }else{
        console.log("You are missing the images folder");
    }
