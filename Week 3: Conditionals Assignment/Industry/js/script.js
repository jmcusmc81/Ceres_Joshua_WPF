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
for(var e = 0; e<webInitialFolders.length; e++)

    if(webInitialFolders[e] === "js"){
        console.log ("Good job! You have the js folder." + alert("Good job! You have the js folder."));

    }else{
        console.log("You are missing the js folder");
    }

var webInitialFiles = ["index.html","script.js"];

for(var f = 0; f<webInitialFiles.length; f++)

    if(webInitialFiles[f] === "index.html"){
        console.log ("Good job! You have the index.html folder." + alert("Good job! You have the index.html folder."));

    }else{
        console.log("You are missing the index.html folder");
    }
for(var g = 0; g<webInitialFiles.length; g++)

    if(webInitialFiles[g] === "scipt.js"){
        console.log ("Good job! You have the script.js folder." + alert("Good job! You have the script.js folder."));

    }else{
        console.log("You are missing the script.js folder");

    }