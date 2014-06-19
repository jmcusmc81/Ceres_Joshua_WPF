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

for(var i = 0; i<webInitialFolders.length; i++) //using the code provide in the GOTO Training week 3

if(webInitialFolders[i] === "css"){
    console.log ("Good job! You have the css folder." + alert("Good job! You have the css folder."));

}else{
    console.log("You are missing the css folder");
}
//This worked out nicely and I am going to do this for every folder/file.

for(var d = 0; d<webInitialFolders.length; d++)

    if(webInitialFolders[d] === "mages"){  //Misspelled images to test out the else condition
        console.log ("Good job! You have the images folder." + alert("Good job! You have the images folder."));

    }else{
        console.log("You are missing the images folder");
    } //Worked out well and I had no alert since the if condition was false

for(var e = 0; e<webInitialFolders.length; e++)

    if(webInitialFolders[e] === "js"){
        console.log ("Good job! You have the js folder." + alert("Good job! You have the js folder."));

    }else{
        console.log("You are missing the js folder");
    }

var webInitialFiles = ["index.html","script.js"];

for(var f = 0; f<webInitialFiles.length; f++)

    if(webInitialFiles[f] === "index.html"){
        console.log ("Good job! You have the index.html file." + alert("Good job! You have the index.html file."));

    }else{
        console.log("You are missing the index.html file");
    }
for(var g = 0; g<webInitialFiles.length; g++)

    if(webInitialFiles[g] === "scipt.js"){ //Misspelled sript.js to check the else condition again.
        console.log ("Good job! You have the script.js file." + alert("Good job! You have the script.js file."));

    }else{
        console.log("You are missing the script.js file");

    }//Else condtion worked well and there was no alert since the if condition was false.

//I am happy with this turnout and it took me a while but I got the hang of it. I had so many different ideas for this but I was getting ahead of myself.
//I was trying to learn search boxes and other more advanced stuff but that will come in time.