 // Ask the user for their first name and store it in the variable Fname
var Fname = prompt("Please enter your name");

// Display a welcome message containing the user's name
alert("Hello " + Fname + ", welcome to the program!");

// Create the constant piValue to store the value of Pi to 7 significant digits
const piValue = 3.1415926;

//Ask the user to input their favorite number and store the value in a variable myFavNum
var myFavNum = prompt("Please enter your favorite number:");

 // Convert the input to a number
myFavNum = parseFloat (myFavNum);

//Calculate the area of a circle using the user’s favorite number as the radius ( r )
var myArea = piValue * Math.pow(myFavNum,2);


// Display the contents of each variable to the webpage
document.write("Hello " + Fname + ", you entered " + myFavNum + " as your favorite number. If that was the radius of a circle, the circle's area would be: " + myArea.toFixed(6) + "." );
