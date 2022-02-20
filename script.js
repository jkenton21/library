// Library main JavaScript file for the actual execution of the application
// Will create book cards based on the form data entered to be displayed on the content seciton of the page

//create array to store the books
let myLibrary = [];

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
    let read = document.getElementById('read').checked;

    let newBook = new Book(title, author, pages, read);

    myLibrary.push(newBook);
}

//function to create the book div to be displayed in html
//function createBook(book) {
//    const item = document.createElement('div');
//    item.classList.add('book-item');
//    item.setAttribute('id',myLibrary.indexOf(book));
//    item.innerHTML = '<div class="info>' + book["title"] + '<br>' + book["author"] + '<br>' + book["pages"] + '<br>' + 'pages';
//
//    return item;
//}

//function to display books on the page
//function display() {
//    const allBooks = document.querySelector('.container');
    //const bookItems = docuemnt.querySelectorAll('.book-item');
    //bookItems.forEach(book => book.remove());
//    for(let i=0; i<myLibrary.length; i++){
//        const bookDiv = createBook(myLibrary[i]);
//        setStyles(item);
//        allBooks.appendChild(item);
//    }
//}

const submitButton = document.querySelector('#submit');
submitButton.addEventListener("click", function() {
    addBookToLibrary();
    //document.querySelector("form").style.display = "none";
    //displayBooks();
});

console.log(myLibrary);