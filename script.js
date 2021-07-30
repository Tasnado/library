// Variables
const library = document.querySelector('.libraryContainer');
const addBookButton = document.querySelector('#addBook');
const form = document.querySelector('.formContainer');


let myLibrary = [
    {
        number: 0,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        pages: 281,
        status: "Complete"
    }, 
    {
        number: 1,
        title: "The Catcher in the Rye",
        author: "J. D. Salinger",
        pages: 234,
        status: "Complete"
    },
    {
        number: 2,
        title: "The Book",
        author: "The Author",
        pages: 360,
        status: "Incomplete"
    }
];

function Book(number, title, author, pages, status) {
  // the constructor...
    this.number = number;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
}

function addBookToLibrary(title, author, pages, status) {
    // do stuff here
    const number = myLibrary.length;
    const addNewBook = new Book(number, title, author, pages, status);
    myLibrary.push(addNewBook);
    console.log(myLibrary);
    displayLibrary();
}

function getBookInfo() {
    const bookTitle = document.getElementById('bookTitle');
    const bookAuthor = document.getElementById('bookAuthor');
    const bookPages = document.getElementById('bookPages');
    const bookStatus = document.getElementById('status');
    const submit = document.getElementById('submit');
    const clearForm = document.getElementById('clearForm');

    clearForm.addEventListener('click', function() {
        clearTheForm();
    });

    submit.addEventListener('click', function() {
        if (bookTitle.value != '' && bookAuthor.value != '') {

            const title = bookTitle.value;
            console.log(title);
            const author = bookAuthor.value;
            console.log(author);

            // to complete later
            const pages = bookPages.value;
            console.log(pages);

            const status = bookStatus.value;
            console.log(status);

            form.style.visibility = "hidden";
            addBookToLibrary(title, author, pages, status);
        } else {
            if (bookTitle.value === '') {
                bookTitle.style.border = "1px solid red";
            } else if (bookAuthor.value === '') {
                bookAuthor.style.border = "1px solid red";
            }
        }
    });
}

function clearTheForm() {
    bookTitle.value = "";
    bookAuthor.value = "";
    bookPages.value = "0";
    bookTitle.style.border = "2px solid steelblue";
    bookAuthor.style.border = "2px solid steelblue";
    bookPages.style.border = "2px solid steelblue";
}

function displayLibrary() {
    
    library.innerHTML = "";

    for (i = 0; i <= myLibrary.length - 1; i++) {
        let book = document.createElement('div');
        book.classList.add('book');
        library.appendChild(book);

        let title = document.createElement('P');
        title.classList.add('title');
        title.innerHTML = myLibrary[i].title;
        book.appendChild(title);
        
        let bookInfo = document.createElement('div');
        bookInfo.classList.add('bookInfo');
        book.appendChild(bookInfo);

        let author = document.createElement('P');
        author.classList.add('author');
        author.innerHTML = `By: ${myLibrary[i].author}`;
        bookInfo.appendChild(author);

        let pageNumber = document.createElement('P');
        pageNumber.innerHTML = `${myLibrary[i].pages} pages`;
        bookInfo.appendChild(pageNumber);

        let statusButton = document.createElement('button');
        statusButton.id = myLibrary[i].number;
        statusButton.classList.add('statusButton');
        statusButton.innerHTML = myLibrary[i].status;
        book.appendChild(statusButton);
        
        let removeBook = document.createElement('button');
        removeBook.id = "removeBook";
        removeBook.innerHTML = "Remove";
        book.appendChild(removeBook);

    }

    let statusButton = document.querySelectorAll('.statusButton');
    
    statusButton.forEach(button => {
        button.addEventListener('click', function() {
            if (this.innerHTML === 'Complete') {
                this.innerHTML = "Incomplete";
                myLibrary[this.id].status = "Incomplete";
                console.log(myLibrary[this.id].status);
            } else if (this.innerHTML === 'Incomplete') {
                this.innerHTML = "Complete"
                myLibrary[this.id].status = "Complete";
                console.log(myLibrary[this.id].status);
            }
        });
    });
}

function init() {

    addBookButton.addEventListener('click', function () {
        clearTheForm();
        if (form.style.visibility === 'hidden') {
            form.style.visibility = "visible";
            document.getElementById('closeForm').addEventListener('click', function () {
                form.style.visibility = "hidden";
            })
        } else {
            form.style.visibility = "hidden";
        }
    });

    displayLibrary();
    getBookInfo();
}

init();

// 4. Add a “NEW BOOK” button that brings up a form allowing users to input the details for the new book: author, title, number of pages, whether it’s been read and anything else you might want.

// 5. Add a button on each book’s display to remove the book from the library.
    // 1. You will need to associate your DOM elements with the actual book objects in some way.One easy solution is giving them a data - attribute that corresponds to the index of the library array.

// 6. Add a button on each book’s display to change its read status.
    // 1. To facilitate this you will want to create the function that toggles a book’s read status on your Book prototype instance.

