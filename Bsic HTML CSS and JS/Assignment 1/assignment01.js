/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Cmd-R),
 * 2. Inspect to bring up an Object Inspector on the result (Cmd-I), or,
 * 3. Display to insert the result in a comment after the selection. (Cmd-L)
 */

/*********************************************************************************
* WEB222 – Assignment 01
* I declare that this assignment is my own work in accordance with Seneca Academic Policy. No part of
* this assignment has been copied manually or electronically from any other source (including web sites)
* or distributed to other students.
*
* Name: _Fabio Bernal______ Student ID: _036422103___ Date: _05/22/2018______
*
********************************************************************************/

/*******************Task 1 *******************/

var name = "Fabio Bernal";
var no_of_courses = 4;
var program = "CPD";

var part_time=true;
console.log("My name is "+name+" and I'm in "+program+" program. I'm taking "+no_of_course+" course in this semester.");
if(part_time) 
  var job = "don't have";
else 
  var job = "have";

console.log(" My name is "+name+" and I'm in "+program+" program. I'm taking "+no_of_courses+" courses in this semester and I "+job+" a part time job now.");


// Another Task 1 /**************/

var name = "Fabio Bernal";
var no_of_course = 4;
var program = "CPD";
var part_time=true;
var no =("have");
var yes =("don't have");
var job=function(){true || false};

console.log("My name is "+name+" and I'm in "+program+" program. I'm taking "+no_of_course+" course in this semester.");

if (yes ==true)
  console.log("My name is "+name+" and I'm in "+program+" program. I'm taking "+no_of_course+" course in this sememster and I "+no+" a part-time job now.");
else( no == false)
console.log("My name is "+name+" and I'm in "+program+" program. I'm taking "+no_of_course+" course in this sememster and I "+yes+" a part-time job now.");




/*******************Task 2 *******************/

var year=2018;
var age = prompt("Please enter your age:");
console.log("You were born in the year of "+(year - age) );

var college_year=  prompt("Enter the number of years you expect to study in the college.");
console.log("You will graduate from Seneca college in the year of " +(year + +college_year) );




/*******************Task 3 *******************/
            
var cel= 10;
var fah=50;
console.log(cel+" °C is "+ (cel * 9 /5 + 32)+ "°F");
console.log(fah+" °F is "+ ((fah -32) * 5/9)+ " °C");




/*******************Task 4 *******************/



for (var i= 0; i <= 10; i++) {
  if (i %2==0) {
  console.log(i+" is even");
  }
  else 
    {
     console.log(i+" is odd");
    }
}



/*******************Task 5 *******************/



function largerNum (number1 , number2) {
  
  if (number1 > number2)
  return number1;
  else
    return number2;  
}

var greaterNum=function(a ,b ) {
if ( a > b)
  return a;
else 
  return b;
}
console.log("The larger number of 10 and 20 is "+ greaterNum(10,20));
console.log("The larger number of 30 and 20 is "+largerNum(30,20));


/*******************Task 6 *******************/


function Evaluator (){
  
  var sum = 0;
for (var i=0; i < arguments.length; i++) {
  sum +=arguments[i] ;
  }
if (sum / arguments.length  >= 50)
    return true;
else 
     return false;
}
console.log("Average greater than or equal to 50: "+Evaluator(90,90,90,90,90));
console.log("Average greater than or equal to 50: "+Evaluator(20,50,30,45,40));
console.log("Average greater than or equal to 50: "+Evaluator(90,60,35,80));


/*******************Task 7 *******************/


var Grader=function(mark) {
if (mark >= 90)
     mark='A+';
else if (mark >= 80)
     mark='A';
else if (mark >= 70)
     mark='B';
else if (mark >= 60)
     mark='C';
else if (mark >= 50)
     mark='D';
else 
     mark='F';

console.log("My grade is : " +mark);
}

Grader(80);
Grader(70);
Grader(60);




/*******************Task 8 *******************/

function showMultiples(num,numMultiples)
{
for(var i =1; i <=numMultiples; i++)
  {
    console.log(num +" X "+ i +" = " + (num*i));
   }
}
showMultiples(2,5);
showMultiples(3,6);
showMultiples(4,7);



