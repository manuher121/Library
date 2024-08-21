const myLibrary = [];

const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button");
const closeButton = document.querySelector("dialog button");

showButton.addEventListener("click", () => {
    dialog.showModal();
  });

closeButton.addEventListener("click", () => {
    dialog.close();
  });

function Book (title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function() {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`
    }
}

function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}




///Maybe try to add a different number for each new div created, instead of .books, #books123...

function showLibrary() {
    for (let i = 0; i < myLibrary.length; i++) {
        const div = document.createElement("div");
        div.classList.add("books");
        div.setAttribute("id", "books" + i);
        const title = document.createElement("p");
        title.textContent = myLibrary[i].title;
        title.classList.add("title");
        div.appendChild(title);
        const author = document.createElement("p");
        author.textContent = myLibrary[i].author;
        author.classList.add("author");
        div.appendChild(author);
        const pages = document.createElement("p");
        pages.textContent = (myLibrary[i].pages + " pages");
        pages.classList.add("pages");
        div.appendChild(pages);
        const read = document.createElement("p");
        read.textContent = myLibrary[i].read;
        read.classList.add("read");
        div.appendChild(read);
        const remove = document.createElement("button");
        remove.textContent = "Remove";
        remove.classList.add("remove");
        div.appendChild(remove);
        remove.addEventListener("click", () => {
            div.remove();
        });
        const readBtn = document.createElement("button");
        readBtn.textContent = "Read";
        readBtn.classList.add("readBtn");
        div.appendChild(readBtn);
        readBtn.addEventListener("click", () => {
            if (read.textContent === "Read") {
                read.textContent = "Not Read";
            } else {
                read.textContent = "Read";
            }
        });
        document.querySelector(".container").appendChild(div);

    }
}




addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 310, "Read");

addBookToLibrary("The Hobbit2", "J.R.R. Tolkien", 310, "Read");

addBookToLibrary("The Hobbit3", "J.R.R. Tolkien", 310, "Read");

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 310, "Read");

addBookToLibrary("The Hobbit2", "J.R.R. Tolkien", 310, "Read");

addBookToLibrary("The Hobbit3", "J.R.R. Tolkien", 310, "Read");

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 310, "Read");

addBookToLibrary("The Hobbit2", "J.R.R. Tolkien", 310, "Read");

addBookToLibrary("The Hobbit3", "J.R.R. Tolkien", 310, "Read");

showLibrary();