// Library main JavaScript file for the actual execution of the application
// Will create book cards based on the form data entered to be displayed on the content seciton of the page

//create array to store the books
let myLibrary = [];

const submitButton = document.querySelector('#submit');
const form = document.querySelector("form");
const allBooks = document.querySelector('.allBooks');
let count = 0;

console.log(myLibrary);

//Submit Button Actions
submitButton.addEventListener("click", addToLibrary);

//function to execute all tasks
function addToLibrary(e){
    count++
    e.preventDefault();
    addBookToLibrary();
    form.reset();
    display();
    const removeFromLibrary = Array.from(document.querySelectorAll(".allBooks div .delete"));
    removeFromLibrary.forEach(button => button.addEventListener('click', deleteBook));
    const toggleRead = Array.from(document.querySelectorAll(".allBooks div .read"));
    toggleRead.forEach(button => button.addEventListener('click', toggleReadTask));
}

//create the function with the book data
function Book(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
}

//function that adds books to myLibrary Array
function addBookToLibrary() {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').checked;
    let book = new Book(title, author, pages, read);

    myLibrary.push(book);
}

//function to create the book div to be displayed in html
function display() {
    const book = myLibrary[myLibrary.length - 1];
    const card = document.createElement('div');
    card.className = "card";
    card.dataset.key = count;

    const bookTitle = document.createElement("h2");
    bookTitle.textContent = book.title;
    bookTitle.className = "book-card-h2";
    //create h3 author name
    const bookAuthor = document.createElement("h3");
    bookAuthor.textContent = book.author;
    bookAuthor.className = "book-card-h3";
    //create h3 page number
    const pageNumber = document.createElement("h3");
    pageNumber.textContent = `${book.pages} pages`;
    pageNumber.className = "book-card-h3";
    //create read button
    const readButton = document.createElement("button");
    readButton.textContent = book.read;
    readButton.className = "read";
    //create delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete book";
    deleteButton.className = "delete";

    card.append(bookTitle, bookAuthor, pageNumber, readButton, deleteButton);

    allBooks.appendChild(card);
}

//function to delete cards
function deleteBook() {
    const parentElement = this.parentElement;
    parentElement.remove();

}

//function to toggle read status
function toggleReadTask() {
    if(this.className === "read") {
        this.className = "unread";
        this.textContent = "unread";
    } else {
        this.className = "read";
        this.textContent = "read";
    }
}


