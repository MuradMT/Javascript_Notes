"use strict";
//#region Strict Mode
//strict mode allows you to write clean code,
//prevents writing undeclared variables,and throw error right away
//#endregion

//#region DOM
//document,DOM,window,browser,
//element(node),nodeList,attribute
//getelementbyid,queryselector etc
//#endregion

//#region Lesson 1.Javascript Output 
// window.alert("Hi") // or simply use alert without window
// window.prompt("what is your name") //or simply use prompt without window
// document.write(<h1>hello world</h1>) //writes permanently,but not first choice to generate some elements
// console.log("hi") //writes directly to browser console
// element.innerHtml="x";//look how to use it in output.html file
//#endregion

//#region Debugging
//Debugging with js console in browsers.
//Open with f12.
//Best browser for debugging is Firefox.
//debugger keyword
//#endregion

//#region Lesson 2.Variables
//variable naming rules,var let const
//additional Date,window.location
//#endregion

//#region Lesson 3.Data types
//string,number,boolean,BigInt
//undefined,null,symbol,object
//object contains object,date,array
//additional window.innerWidth,window.closed
//#endregion

//#region Lesson 4.Operators and expressions
//assignment,arithmetic,++ -- += numbers
//string operators + +=
//boolean operators == === < !=
//logical operators ||
//#endregion

//#region Lesson 5.Functions Call Bind Events
// const person1={
//     fullname:function(){
//         return this.name + this.surname
//     }
// }
// const person2={
//     name:'Murad',
//     surname:'Mammadzada'
// }
// console.log(person1.fullname.call(person2));
// let x=person1.fullname.bind(person2);
// console.log(x());
//event types:mouse(onchange,onclick,onmouseout,onmouseover),keyboard(onkeypress),frame(onload,onresize)
function message(msg){
     document.getElementById("tag").innerHTML=msg +"event"
}
//#endregion

//#region Lesson 6.Code placement
//Head,body,external file
//#endregion

//#region Lessson 7.Folder Structure
//-main folder
//     -some.html
//     -second.html
//     -css folder
//          style.css
//     -images folder
//          avatar.png
//     -js folder
//          index.js
//use ../ to back folder
//if you use external project codes,add it to dist folder
//#endregion

//#region Lesson 8.Change style
//after getting element from node,
//you can say some.style.property and you can modify it.
//#endregion

//#region Lesson 9.Html Tabindex attribute
//helps you to do operation when you click tab
//#endregion

//#region Lesson 10.gettAttribute,setAttribute
//my_img = document.querySelector("img")
// my_img.src = "mydog.jpg"
// my_img.setAttribute("alt","Brown labradoodle")
// console.log(my_img.src)
// console.log(my_img.getAttribute("src"))
//#endregion

//#region Lesson 11.Arrays
//declare array let x=[1,2,3]
//getelementsbyclassname,queryselectorall returns array
//x[0] access elements
//length sort push
//x.push(5) or x[x.length]=5 is same
//console.log(x)->prints array as a string
//#endregion

//#region Lesson 12.Loops
//for while do-while
//#endregion

//#region Lesson 13.Math class,random generation
//let nums=[8,6,12,7,24,1];
//console.log(nums[Math.floor(Math.random()*nums.length)])
//#endregion

//#region Lesson 14.Image validation
//lightbox ispreferable tool to do it
//#endregion

