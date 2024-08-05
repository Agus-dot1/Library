const addBookBtn = document.querySelector('.add-book-btn');
const bookTemplate = document.querySelector('.book-template');
const bookContainer = document.querySelector('.books-container');

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
    const newTitle = prompt(book.title);
    const newAuthor = prompt(book.author);
    const newDescription = prompt(book.description);

    if (newTitle && newAuthor && newDescription) {
        myLibrary[index] = { title: newTitle, author: newAuthor, description: newDescription };
        displayBooks();
    }
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