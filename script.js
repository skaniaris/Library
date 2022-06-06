let myLibrary = []; 

function Book(title, author, pages, read) {
    this.title = title 
    this.author = author  
    this.pages = pages 
    this.read = read 
}

// Opens popup //

let popup = document.querySelector(".popupHidden");

function showPopup(event) {
    popup.classList.add("popupShow");
}

const startBtn = document.querySelector(".startBtn"); 
startBtn.addEventListener("click", showPopup);

// creates book //
let newBook; 

// Adds book to library //

j = 0;  
let del; 

function displayBook() {
    let lb = document.createElement("br"); 

    newBook = document.createElement("div");
    newBook.setAttribute("id", j );
    document.querySelector(".bookList").appendChild(newBook); 
    newBook.innerHTML += "Title: " + myLibrary[j].title + "<br/>"; 
    newBook.innerHTML += "Author: " +myLibrary[j].author + "<br/>";
    newBook.innerHTML += "Number of Pages: " +myLibrary[j].pages + "<br/>";

    let isRead = document.createElement("INPUT"); 
    isRead.type = "checkbox"; 
    isRead.id = "isRead";
    isRead.checked = false; 
    newBook.innerHTML += "Have You Read it?: ";
    newBook.appendChild(isRead);  

    console.log(myLibrary[j].read);

    if (myLibrary[j].read) {
        isRead.checked = true; 
    }

    newBook.appendChild(lb);

    del = document.createElement("button"); 
    del.innerHTML = "Delete";
    del.setAttribute("id", j);
    newBook.appendChild(del);
    del.addEventListener("click", deleteBook);

    j++; 
        }

function addBookToLibrary() {
    // storing data 
    let newTitle = document.getElementById("title").value;
    let newPages = document.getElementById("pages").value;
    let newAuthor = document.getElementById("author").value;
    let newRead; 
    if (document.getElementById("read").checked == true) {
        newRead = true; 
    } else {
        newRead = false; 
    }
    const myBook = new Book(newTitle, newAuthor, newPages, newRead);

    // adding data to library
    myLibrary.push(myBook); 
    console.log(myLibrary[0]);

    // hiding the popup 
    popup.classList.remove("popupShow")

    displayBook(); 

    formReset();

}

const addNewBook = document.querySelector(".complete");
addNewBook.addEventListener("click", addBookToLibrary);


function formReset() {
    const inputs = document.querySelectorAll("#title, #author, #pages, #read"); 
    inputs.forEach(input => {
        input.value = ""; 
    });
    document.getElementById("read").checked = false; 
}

// delete button functionality 

function deleteBook() {
    btnId = this.id; 
    document.getElementById(btnId).remove(); 
}