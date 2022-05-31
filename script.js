let myLibrary = []; 

function Book(title, author, pages, read) {
    this.title = title 
    this.author = author  
    this.pages = pages 
    this.read = read 
}

// Opens popup //

function showPopup(event) {
    let popup = document.querySelector(".popupHidden");
    popup.classList.add("popupShow");
}

const startBtn = document.querySelector(".startBtn"); 
startBtn.addEventListener("click", showPopup);

// creates book //

let title = document.getElementById("#title");
let author = document.getElementById("#author");
let pages = document.getElementById("#pages");
let read = document.getElementById("#read");
let readChecked = read.checked; 

const book = new Book(title, author, pages, readChecked); 

// Adds book to library //

function addBookToLibrary() {
    myLibrary.push(book); 
}

const addNewBook = document.querySelector(".complete");
addNewBook.addEventListener("click", addBookToLibrary);

console.log(myLibrary);

// Adding to the div //

