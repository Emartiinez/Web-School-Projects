
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
        PART B
*********************************************/

// an array of course objects
var courses = [
    { code: 'APC100', name: 'Applied Professional Communications', hours: 3, url: 'http://www.senecacollege.ca/' },
    { code: 'IPC144', name: 'Introduction to Programming Using C', hours: 4, url: 'https://scs.senecac.on.ca/~ipc144/' },
    { code: 'ULI101', name: 'Introduction to Unix/Linux and the Internet', hours: 4, url: 'https://cs.senecac.on.ca/~fac/uli101/live/' },
    { code: 'IOS110', name: 'Introduction to Operating Systems Using Windows', hours: 4, url: 'https://cs.senecac.on.ca/~fac/ios110' },
    { code: 'oop244', name: 'Introduction to Object-Oriented Programming', hours: 4, url: 'https://scs.senecac.on.ca/~oop244/'},
    { code: 'web222', name: 'Web Programming Principles', hours: 4, url: 'https://cs.senecac.on.ca/~wei.song/web222/web222.html' },
    { code: 'dbs201', name: 'Introduction to Data Base Design and SQL', hours: 4, url: 'https://cs.senecac.on.ca/~dbs201/' },
    { code: 'EAC150', name: 'College English', hours: 3, url: null }
];

// prototype object for creating student objects
var student = { 
    name: "", 
    dob: new Date(),
    sid: "",
    program: "", 
    gpa: 4.0,
    toString: function () {
        return 'Student info for ' + this.name + ': born on ' + this.dob.toLocaleDateString() +
               ', student id ' + this.sid + ', progrem ' + this.program + ', current GPA ' + this.gpa; 
    }
};

/************************************************************
 * Start your Part B code here. Do not change the code above.
 ************************************************************/
// task 1
var lastCourse = courses.pop();


console.log("\n\n*** Task 1 ***\n\n" + "Course EAC150 was deleted from the array (courses)" +"\n\n");
console.log("Adding new course objects into the array (courses)\n\n");

console.log("course objectys in the array (courses):");
for (i=0; i< courses.length; i++)
{
console.log(courses[i].code + ", " + courses[i].name + ", " 
 + courses[i].hours + " hours/week, website: " + courses[i].url);
}


// task 2
console.log("\n\n ***Task 2 ***\n\n");
console.log("Students objects in the array (students):\n");

var studentA = Object.create(student);
studentA.name = "John Smith";
studentA.fob = new Date (1999, 9, 10);
studentA.sid = "010456101";
studentA.program = "CPA";
studentA.gpa = 4;

var studentB = Object.create(student);
studentB.name = "Jim Carry";
studentB.fob = new Date (1992, 1, 17);
studentB.sid = "012345678";
studentB.program = "CPD";
studentB.gpa = 3.5;

var studentC = Object.create(student);
studentC.name = "Justin Beiber";
studentC.fob = new Date (1994, 3, 1);
studentC.sid = "0987654321";
studentC.program = "CAN";
studentC.gpa = 3;

var studentD = Object.create(student);
studentD.name = "Justin trudeau";
studentD.fob = new Date (1992, 1, 12);
studentD.sid = "123456789";
studentD.program = "CAN";
studentD.gpa = 4;

var students =[studentA , studentB,studentC,studentD];

function display( list , arrayIndex)
{
    console.log(arrayIndex +": "+list.toString());
}
students.forEach(display);
