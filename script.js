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
        status: "Read"
    }, 
    {
        number: 1,
        title: "The Catcher in the Rye",
        author: "J. D. Salinger",
        pages: 234,
        status: "Read"
    },
    {
        number: 2,
        title: "The Book",
        author: "The Author",
        pages: 360,
        status: "Unread"
    }
];

function Book(title, author, pages, status) {
  // the constructor...
}

function addBookToLibrary() {
  // do stuff here
}

function displayBooks() {
    
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
            if (this.innerHTML === "Read") {
                this.innerHTML = "Unread";
                myLibrary[this.id].status = "Unread";
                console.log(myLibrary[this.id].status);
            } else if (this.innerHTML === "Unread") {
                this.innerHTML = "Read"
                myLibrary[this.id].status = "Read";
                console.log(myLibrary[this.id].status);
            }
        });
    });
}



function init() {

    addBookButton.addEventListener('click', function () {
        if (form.style.visibility === "hidden") {
            form.style.visibility = "visible";
            document.getElementById('closeForm').addEventListener('click', function () {
                form.style.visibility = "hidden";
            })
        } else {
            form.style.visibility = "hidden";
        }
    });

    displayBooks();
}

init();

// 4. Add a “NEW BOOK” button that brings up a form allowing users to input the details for the new book: author, title, number of pages, whether it’s been read and anything else you might want.

// 5. Add a button on each book’s display to remove the book from the library.
    // 1. You will need to associate your DOM elements with the actual book objects in some way.One easy solution is giving them a data - attribute that corresponds to the index of the library array.

// 6. Add a button on each book’s display to change its read status.
    // 1. To facilitate this you will want to create the function that toggles a book’s read status on your Book prototype instance.

