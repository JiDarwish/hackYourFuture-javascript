//1
let x = 7.25;

//2
let y = Math.round(x);
document.write("The num is " + x + "<br>" +
	"It rounds up to: " + y + "<br>");
  
//3
let colors = ["Red", " Green", " Blue"];

//4
document.write("The array(colors) has " + colors.length + " colors in it." + "<br>" +
"They are: " + colors + ".");

//5
x = 9;
y = "Hello";

if(typeof(x) === typeof(y)) {
	document.write("Ok cool");
} else {
	document.write("Not cool");
}

//6
x = 7;
document.write("the value of x now is: " + x + "br" + "And now we change the value of x to the result 
of the remainder of this operation 7/3");
x = x % 3;
document.write(x);

//7
document.write("You can store multiple types in one array, however it is not 
a smart thing to do." + "<br>"  + "Here is an example of an array called animals:" + "<br>");
let animals = ["Penguin",  0,  true];
document.write("Animals = " + animals + "." + "<br>" + "It contains a string, number and a boolean" + "<br>" + "<br>");

z = 6/0;
n = 10/0;
if(z === n){
	document.write("They are equal");
} else {
	document.write("They are Not equal");
}
