// Library main JavaScript file for the actual execution of the application
// Will create book cards based on the form data entered to be displayed on the content seciton of the page

//create array to store the books
let myLibrary = [];
const allBooks = document.querySelector('.allBooks');
const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').checked;

    console.log(myLibrary);

const bible = new Book("bible", "jesus", 2000, true);
myLibrary.push(bible);
//create the function with the book data
function Book(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
}

//function that adds books to myLibrary Array
function addBookToLibrary(title, author, pages, read) {
    
    const newBook = new Book(title, author, pages, read);

    myLibrary.push(newBook);
}

//function to create the book div to be displayed in html
function createBook(book) {
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('book-item');
    itemDiv.setAttribute('id',myLibrary.indexOf(book));
    itemDiv.innerHTML = '<div class="card">' + book["title"] + '<br>' + book["author"] + 
    '<br>' + book["pages"] + '<br>' + 'pages' + '</div>';

    allBooks.appendChild(itemDiv);
}

//function to display books on the page
function display() {
    for(let i=0; i<myLibrary.length; i++){
        createBook(myLibrary[i]);
    }
    
}

const submitButton = document.querySelector('#submit');
submitButton.addEventListener("click", function() {
    addBookToLibrary();
    //document.querySelector("form").style.display = "none";
    display();
});