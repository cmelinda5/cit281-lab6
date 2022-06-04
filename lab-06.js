/*
    CIT 281 Lab 6
    Name: Melinda Chan
*/

class Book {
    constructor(title, author, pubDate, isbn) {
        this.title = title;
        this.author = author;
        this.pubDate = pubDate;
        this.isbn = isbn;
    }
}

class Library {
    constructor(name) {
        this._name = name;
        this._books = []; // book array has objects of books with title, author, pubDate properties
    }
    get books() {
        // Return copy of books
        return JSON.parse(JSON.stringify(this._books));
    }
    get count() {
        return this._books.length;
    }
    addBook(book = {}) {
        const { title = "", author = "", pubDate = "", isbn = "" } = book;
        if (title.length > 0 && author.length > 0) {
            const newBook = { title, author, pubDate, isbn };
            this._books.push(newBook);
        }
    }
    listBooks() {
        for (const book of this._books) { // for of loops through array 
            const { title, author, pubDate, isbn } = book;
            console.log(`Title: ${title}, Author: ${author}, PubDate: ${pubDate}, isbn: ${isbn}`)
        }
    }
    deleteBook(isbn) {
        for (let i = 0; i < library.books.length; i++) {
            if (isbn === library.books[i].isbn) { // is isbn in function = to isbn in ith # of array
             
                /*
                let tester = library.books.map( (e) => e.isbn); // what's put into e is the array of all book objects
                console.log(tester);
                */

                let index = library.books.map(e => e.isbn).indexOf(isbn); // e is each element of the library.books array which is an object, e.isbn -> dot notation to acesss isbn property of object
                library._books.splice(index, 1); // start from index, second parameter "1" is how many elements to remove array starting from start
                // DOESN'T WORK: let index = library.books[i].indexOf(isbn);
                break;
                
                // splice only that object with the matching isbn
                // use index of to find index of item you want to splice - set this to variable let's say a
                // splice (a, 1s)
            }
        }
    }
}

// PART 6
/* ADD TO LIBRARY

const aboutLove = new Book("All About Love", "Bell Hooks", "12/22/1999");
const neverTold = new Book("Everything I Never Told You", "Celeste Ng", "06/26/2014");
library.addBook(aboutLove);
library.addBook(neverTold);

*/

// Create library object
const library = new Library("New York Times Best Seller List");

// Create books
const atomicHabits = new Book("Atomic Habits", "James Clear", "10/16/2018", "0735211299");
const theHillWeClimb = new Book("The Hill We Climb", "David Baldacci", "03/30/2021", "059346527X");
const oceanPrey = new Book("Ocean Prey", "John Sandford", "04/13/2021", "1398505501");

// Add books to library and output library count and books
library.addBook(atomicHabits);
library.addBook(theHillWeClimb);
library.addBook(oceanPrey);
console.log(`Book count: ${library.count}`);
library.listBooks();

// Delete a book and output library books
console.log("* Library after delete *");
library.deleteBook("059346527X");
library.listBooks();


/* 
    1: create a for loop runs through books, use != if isbn is not equal to isbn 
    in there then push it to copy FOR this.books

    2: iterate through array
    - find index that matches that isbn 
    - save that index to a variable outside loop
    - at the end this.books use [...this.books.slice(0, index)]
    - this copies first elemene to array up until that index (excluding that index)
    - this.books index but start .slice (index +1, index.length)
*/



