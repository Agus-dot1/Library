const addBookBtn = document.querySelector('.add-book-btn');
const bookTemplate = document.querySelector('.book-template');
const bookContainer = document.querySelector('.books-container');

const searchBtn = document.querySelector('#search-btn');
const searchInput = document.querySelector('#search-input');
const searchResults = document.querySelector('#search-results');

const myLibrary = [];
let exampleBookDeleted = false;  // Flag to track if the example book is deleted

addBookBtn.addEventListener('click', () => {
    const newBook = {
        title: "New Book Title",
        author: "New Author",
        description: "New Description",
    };
    myLibrary.push(newBook);
    displayBooks();
});

function displayBooks() {
    const exampleBook = document.querySelector('#example');
    bookContainer.innerHTML = ''; // Clear existing books

    if (exampleBook && !exampleBookDeleted) {
        bookContainer.appendChild(exampleBook); // Append example book back
    }
    myLibrary.forEach((book, index) => {
        const bookElement = bookTemplate.cloneNode(true);
        bookElement.classList.remove('hidden');
        bookElement.classList.add('flex');

        const bookInfo = bookElement.querySelector('.book-info');
        bookInfo.querySelector('h5').innerText = book.title;
        bookInfo.querySelector('p:nth-child(2)').innerText = book.author;
        bookInfo.querySelector('p:nth-child(3)').innerText = book.description;

        // Add event listeners to new buttons
        bookElement.querySelector('.edit-btn').addEventListener('click', () => editBook(index));
        bookElement.querySelector('.delete-btn').addEventListener('click', () => deleteBook(index));

        bookContainer.append(bookElement);
    });
}

function editBook(index) {
    const book = myLibrary[index];
    // Replace these prompts with a form in the UI in a real application

    // lapiz al lado de los textos para editarlos individualmente
    const newTitle = prompt("Edit title:", book.title);
    const newAuthor = prompt("Edit author:", book.author);
    const newDescription = prompt("Edit description:", book.description);

    myLibrary[index] = { title: newTitle, author: newAuthor, description: newDescription };
    displayBooks();
}

function deleteBook(index) {
    myLibrary.splice(index, 1);
    displayBooks();
}

document.querySelector('#example .delete-btn').addEventListener('click', () => {
    exampleBookDeleted = true;
    document.querySelector('#example').remove();
});

// Initial display
displayBooks();


const addWrapper = document.querySelector('.addWrapper');
const arrowLeft = document.querySelector('.fa-arrow-left-long');
const arrowRight = document.querySelector('.fa-arrow-right-long');
addWrapper.addEventListener('click', () => {
    addWrapper.classList.remove('animate-bounce');
    arrowLeft.classList.remove('animate-bounce-left');
    arrowRight.classList.remove('animate-bounce-right');
});


// theme
var theme = document.querySelector(".theme");

theme.addEventListener("click", function () {
    document.documentElement.classList.toggle("dark");
    if (document.documentElement.classList.contains("dark")) {
        theme.classList.remove("fa-moon");
        theme.classList.add("fa-sun");
        theme.classList.add("text-white");
    } else {
        theme.classList.remove("fa-sun");
        theme.classList.add("fa-moon");
        theme.classList.remove("text-white");
        theme.classList.add("text-sky-950");
    }
});



//loader
document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
      document.querySelector(".loader").classList.add("animate-loader-hide");
    }, 500);
  });
  
const loader = document.querySelector(".loader");
loader.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
         document.body.removeChild(loader);
      }, 2000);
});