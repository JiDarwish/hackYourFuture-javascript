//  			4 & 5

let header = document.createElement("h1");
let headerText = document.createTextNode("My selection of books");
header.appendChild(headerText);
document.body.appendChild(header);

let booksInfo = {
	1: {
	author: "Agatha Christy",
	title: "The murder of Roger Ackroyd",
	language: "English"
 	},
	2: {
	author: "Dan Brown", 
	title: "The da vinci code",
	language: "English"
 	},
	3:{
	author: "Dan Brown" ,
	title: "Angels & Demons",
	language: "English"
 	},
	4:{
	author: "Stephen Chbosky",
	title: "The perks of being a wallflower",
	language: "English"
 	},
	5:{
	author: "Paulo Coelho",
	title: "The Alchemist",
	language: "Brazilian"
 	},
	6:{
	author: "Dan Brown" ,
	title: "The lost symbol",
	language: "English"
 	},
	7:{
	author: "John Green" ,
	title: "The fault in our stars",
	language: "English"
 	},
	8:{
	author: "Agatha Christy",
	title: "The A.B.C murders",
	language: "English"
 	},
	9:{
	author: "Agatha Christy",
	title: "A murder on the oriënt express",
	language: "English"
 	},
	10:{
	author: "John Green",
	title: "Looking for Alaska",
	language: "English"
 	}
}


function generateListWithObj(){
	let listWithObj = document.createElement("ul");
	document.body.appendChild(listWithObj);
	
	for(n in booksInfo){
		let listWithObjChild = document.createElement("li");
		listWithObjChild.setAttribute("id", n);
		listWithObj.appendChild(listWithObjChild);
		
		let bookTitle = document.createElement("h1");
		let titleText = document.createTextNode(booksInfo[n].title);
		bookTitle.appendChild(titleText);
		listWithObjChild.appendChild(bookTitle);
		
		let bookAuthor = document.createElement("h2");
		let authorText = document.createTextNode(booksInfo[n].author);
		bookAuthor.appendChild(authorText);
		listWithObjChild.appendChild(bookAuthor);
		
		let bookLanguage = document.createElement("p");
		let languageText = document.createTextNode(booksInfo[n].language);
		bookLanguage.appendChild(languageText);
		listWithObjChild.appendChild(bookLanguage);
		
	}
}
generateListWithObj();


//			7


let images = {
	1: "https://hypnoticmysteries.files.wordpress.com/2016/03/51zahbsqzll-_sx329_bo1204203200_.jpg",
	2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5_GOHfmhTV9UDrz0zduIRSU2rjz-ESojpAijLDZimK83C0ZUN0PTEt4M",
	3: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx8P8m7NEuZgU1BUPndrtUJ0NH0zR01gXBKHMIBezdSqFf85SQUQ",
	4: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeDcGpuxpWHEy_Dhul2b7q7Qem7_xmpPzDRI0W_84E-_sI5ES8q_7NzvE",
	5: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4EGN1pmZ_K-zCA5lAYR3ZjZGS7L-spqpfreqBq97qz6UeErAy0V7_fIw",
	6: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPYGwN_GGlqLa107Ycrp68DuuBb3khN-O0cFPxLsHzAzIbCccrgEDc4w",
	7: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3s73LGsOXfbN4ckpUOmpLuif0IxXMqcC_4Rg9jF_rLrR2_Vu4L2Sbkt0",
	8: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5OBFCEn93DwJIJX1CuYF9IPUIAUpOxRf1QaUbCZoQC2ypCtZcgzIEyQ",
	9: "https://images-na.ssl-images-amazon.com/images/I/51%2B2QZIRWfL._SY344_BO1,204,203,200_.jpg",
	10: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqC7XW2BpZ6xDArauawYBEYp89qDbrzYYeIviN312ppLMf01SH3TJM7I4",
}


let arraykeys = Object.keys(images);
function addImg(){
			for(z of arraykeys){
			let img = document.createElement("img");
			img.setAttribute("src", images[z]);
			img.setAttribute("alt", "Book's photo");
			document.getElementById(z).appendChild(img);
	}
}
addImg();
