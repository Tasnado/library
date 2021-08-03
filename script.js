// Variables
const library = document.querySelector('.libraryContainer');
const addBookButton = document.querySelector('#addBook');
const form = document.querySelector('.formContainer');


let myLibrary = [
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        pages: 281,
        status: "Complete"
    },
    {
        title: "The Catcher in the Rye",
        author: "J. D. Salinger",
        pages: 234,
        status: "Incomplete"
    }
];

function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
}

function addBookToLibrary(title, author, pages, status) {
    const addNewBook = new Book(title, author, pages, status);
    myLibrary.push(addNewBook);
    updateLocalStorage();
    displayLibrary();
}

function clearTheForm() {
    bookTitle.value = "";
    bookAuthor.value = "";
    bookPages.value = "0";
    bookTitle.style.border = "2px solid steelblue";
    bookAuthor.style.border = "2px solid steelblue";
    bookPages.style.border = "2px solid steelblue";
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

            if (isNaN(bookPages.value)) {
                bookPages.style.border = "1px solid red";
            } else {
                const title = bookTitle.value;
                const author = bookAuthor.value;
                const pages = bookPages.value;
                const status = bookStatus.value;

                form.style.visibility = "hidden";
                addBookToLibrary(title, author, pages, status);
            }

        } else {
            if (bookTitle.value === '') {
                bookTitle.style.border = "1px solid red";
            } else if (bookAuthor.value === '') {
                bookAuthor.style.border = "1px solid red";
            }
        }
    });
}


function removeBookStyle(index) {
    const book = document.querySelectorAll('.book');
    const title = document.querySelectorAll('.title');

    book[index].style.backgroundColor = "whitesmoke";
    book[index].style.border = "2px solid steelblue";
    title[index].style.backgroundColor = "steelblue";
}

// dynamic styling
function bookStyling() {
    const completeBooks = document.querySelectorAll('.complete');
    const titleComplete = document.querySelectorAll('.titleComplete');

    completeBooks.forEach((book, index) => {
        book.style.backgroundColor = "#E8D6EB";
        book.style.border = "2px solid #8A4F7D";
        titleComplete[index].style.backgroundColor = "#8A4F7D";
    });
}


function statusButtonSetup() {
    const book = document.querySelectorAll('.book');
    const title = document.querySelectorAll('.title');
    const statusButton = document.querySelectorAll('.statusButton');

    statusButton.forEach((button, index) => {
        button.addEventListener('click', function() {
            if (this.innerHTML === 'Complete') {
                this.innerHTML = "Incomplete";
                myLibrary[index].status = "Incomplete";
                book[index].classList.remove('complete');
                title[index].classList.remove('titleComplete');
                statusButton[index].classList.remove('statusComplete');
                updateLocalStorage();
                removeBookStyle(index);

            } else if (this.innerHTML === 'Incomplete') {
                this.innerHTML = "Complete"
                myLibrary[index].status = "Complete";
                book[index].classList.add('complete');
                title[index].classList.add('titleComplete');
                statusButton[index].classList.add('statusComplete');
                updateLocalStorage();
                bookStyling();
            }
        });
    });
}

function removeButtonSetup() {
    let removeBook = document.querySelectorAll('.removeBook');
    removeBook.forEach((remove, index) => {
        console.log(index);
        remove.addEventListener('click', function() {
            myLibrary.splice(index, 1);
            updateLocalStorage();
            displayLibrary();
        });
    });
}

function displayLibrary() {
    library.innerHTML = "";

    for (i = 0; i <= myLibrary.length - 1; i++) {
        let book = document.createElement('div');
        library.appendChild(book);

        let title = document.createElement('div');
        book.appendChild(title);
        let titleP = document.createElement('p');
        titleP.innerHTML = myLibrary[i].title;
        title.appendChild(titleP);
        
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

        let theStatusButton = document.createElement('button');
        
        theStatusButton.innerHTML = myLibrary[i].status;
        book.appendChild(theStatusButton);
        
        let removeBookButton = document.createElement('button');
        removeBookButton.classList.add('removeBook');
        removeBookButton.innerHTML = "Remove";
        book.appendChild(removeBookButton);

        if (myLibrary[i].status === "Complete") {
            book.classList.add('book', 'complete');
            title.classList.add('title', 'titleComplete');
            theStatusButton.classList.add('statusButton', 'statusComplete');
        } else {
            book.classList.add('book');
            title.classList.add('title');
            theStatusButton.classList.add('statusButton');
        }
    }

    bookStyling();
    removeButtonSetup();
    statusButtonSetup();
}

function getLocalStorage() {
    let originalLib = localStorage.getItem('library');
    myLibrary = JSON.parse(originalLib);
}

function updateLocalStorage() {
    let str = JSON.stringify(myLibrary);
    localStorage.setItem('library', str);
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
    if (localStorage.getItem("library") !== null) {
        getLocalStorage();
    }
    displayLibrary();
    getBookInfo();
}

init();


