//   1

function sum(a, b, c){
	return a + b + c;
}
console.log(sum(1, 2, 3));


// 	 2


function colorCar(color){
	return "a " + color + " car.";
}
console.log(colorCar("red"));


// 		 3


let obj = {
	"firstKey": "firstValue",
	"secondKey": "secondValue",
	"thirdKey": "thirdValue",
	"forthKey": "forthValue"
};


function objPrinter(x){
	return x;
}
console.log(objPrinter(obj));


// 				 4


function vehicleType(color, code){
	let vehicle = {
		1: "car",
		2: "motorbike"
	};
	return "a " + color + " " + vehicle[code];
} 
console.log(vehicleType("blue", 2));


// 			 5


console.log(3 == 3 || false);


//			 6


function vehicleType(color, code, age){
	let vehicle = {
		1: "car",
		2: "motorbike",
		3: "new",
		4: "refurbished",
		5: "used"
	};
	return "a " + color + " " + vehicle[age] + " " + vehicle[code];
} 
console.log(vehicleType("green", 2, 4));


//		  7&8


let vehicles = [
	"car",
	"motorbike",
	"bike",
	"caravan",
	"airplane"
]

console.log(vehicles[2]);


// 		 9


function vehicleType(color, age, code){
	let vehicleAge = {
		1: "used",
		2: "refurbished",
		3: "new"
	};
	let vehicles = {
	1: "caravan",
	2: "motorbike",
	3: "bike",
	4: "car",
	5: "airplane"
};
	return "a " + color + " " + vehicleAge[age] + " " + vehicles[code];
} 
console.log(vehicleType("green", 3, 1));



// 		 10&11


let vehicles = [
	"car",
	"motorbike",
	"bike",
	"caravan",
	"airplane"
];
let s = "";
let x = vehicles.length - 1;
for (i = 0; i < x; i++){
	s += vehicles[i] + ", ";
}

console.log("Amazing Joe's Garage, we service " + s + vehicles[x] + ".");



//		 12


let emptyObj = {};
console.log(emptyObj)


//			13

/* Didn't work out and I don't want to write stuff I didn't understand haha */


//			  14





function container(a){
	return a;
}

function content(a, b, c){
	let sum = a + b + c;
	return (sum);
}


console.log(container(content(2, 4, 5)));



//		  15


let x = [1,2,3];
let y = [1,2,3];
let z = y;

console.log("This (x == y) is " + (x==y));
console.log("This (x === y) is " + (x===y));
console.log("This (z == y) is " + (z==y));
console.log("This (z == x) is " + (z==x));




//		16

let o1 = { foo: "bar"};
let o2 = { foo: "bar"};
let o3 = o2;

console.log(o2 === o3);


o2 = { foo1: "bar1"};
console.log(o2 === o3);
console.log(o3);

//o2 does not change o3 because o3 is assigned to its old value not o2 itself

console.log(o1==o3);
o1 = { foo2: "bar3"};
console.log(o1);
console.log(o1==o3);
console.log(o3);

//o1 doesn't change o3 becuase there is no relationship between them at all



/* It does matter because if you assigned o3 to o2 (let o3 = o2;)
That creats a new variable and gives it the same value as o2.
But if you assigned o2 to o3 ( let o2 = o3;) you will get an error because you've already declared o2 and you cannot declare a variable twice, only change it and to do that you don't need to use (let).
Even if you just assigned o2 to o3 (o2 = o3) It will still give an error because o3 has not been defined yet
*/


//		  17


/*It returns a string, because typeOf (anything) is always given in a string.
Proof?
*/
let bar = 42; 
typeof typeof bar;


//done
