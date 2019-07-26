/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */


/*******************************************************************************
* WEB222 – Assignment 2
* I declare that this assignment is my own work in accordance with Seneca
* Academic Policy. No part of this assignment has been copied manually or
* electronically from any other source (including web sites) or distributed to
* other students.
*
* Name: __Fabio Bernal___________ Student ID: __036422103__________ Date: ____06/10/2018___________
*
******************************************************************************/

/********************************************
        PART A
*********************************************/

/*****************************
* Step 1
*****************************/
var e1,e2,e3,e4,e5,e6,e7,str;
/*****************************
* Step 2
*****************************/
function capsFirstLetter(a)
{
return  a.substr(0,1) .toUpperCase()+ a.substr(1).toLowerCase();
}

e1 = prompt("Enter your first name: ","fabio");
e1=capsFirstLetter(e1);

/*****************************
* Step 3
*****************************/
var getAge =function(int){
   
   return (new Date().getFullYear() - int );    
 
}
e2= prompt("Enter the year you were born: ","1992" );
e2 = getAge(e2);


/*****************************
* Step 4
*****************************/

e3= prompt("Enter the college you are attending: ","seneca college");

var name=e3.split(" ");
name[0] = capsFirstLetter(name[0]);
name[1]=capsFirstLetter(name[1]);


/*****************************
* Step 5
*****************************/
e4 = prompt("Enter your favorite sports", "hockey,football,basketball,tennis,golf");
e4 = e4.replace(/football/, 'soccer');
e4 = e4.split(',');
e5 = prompt("Enter one more favorite sports", "formula 1");
e4.push(e5);


/*****************************
* Step 6
*****************************/
for (var i=0; i < e4.length; i++)
{
        e4[i]=e4[i].toUpperCase() 
}
e4.sort();


/*****************************
* Step 7
*****************************/
function getDateString(date)
{
        var today = new Date(date);
        var y=date.getFullYear();
        var m = ''+(date.getMonth() +1);
        var d=''+date.getDate();
       
      if (m.length < 2)
              {
                   m='0' + m;
              }
      if (d.length <2 )
                {
                      d='0' +d;          
                }
  return [y, m, d].join('-');                
}
e6 = new Date();
e7 = getDateString(e6);


/*****************************
* Step 8
*****************************/
str =  "user info:\n\n"+"name (e1): " +e1 +"\n"+"age (e2): "+e2+"\n"+"scool (e3): "
       +e3+"\n"+"favorite sports (e4): "+"\n"+"\t"+e4[0]+"\n"+"\t"+e4[1]+"\n" +  "\t" +
       e4[2]+"\n"+"\t"+e4[3]+"\n"+"\t"+ e4[4]+"\n"+"\t"+e4[5]+"\n"+
       "current date (e7): "+e7; 

console.log(str);


