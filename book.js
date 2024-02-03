// a. Create an object 'book'
const book = {
    isbn: "978-1234567890",
    name: "JavaScript Basics",
    authors: ["John Doe", "Jane Smith"],
    publicationDate: "2022-01-01",

    // b. Add methods to the 'book' object
    getAuthors: function () {
        return this.authors.join(', ');
    },
    setAuthors: function (newAuthors) {
        this.authors = newAuthors;
    },
    getIsbn: function () {
        return this.isbn;
    },
    setIsbn: function (newIsbn) {
        this.isbn = newIsbn;
    }
};

// c. Create two book objects and compare by isbn
const book1 = {
    isbn: "978-1234567890",
    name: "JavaScript Basics",
    authors: ["John Doe", "Jane Smith"],
    publicationDate: "2022-01-01",
};

console.log(`ISBN: ${book1.isbn}`);
console.log(`Name: ${book1.name}`);
console.log(`Authors: ${book1.authors.join(', ')}`);
console.log(`Publication Date: ${book1.publicationDate}`);

const book2 = {
    isbn: "978-1234567890",
    name: "JavaScript Basics",
    authors: ["John Doe", "Jane Smith"],
    publicationDate: "2022-01-01",

};

console.log(`ISBN: ${book2.isbn}`);
console.log(`Name: ${book2.name}`);
console.log(`Authors: ${book2.authors.join(', ')}`);
console.log(`Publication Date: ${book2.publicationDate}`);

if (book1.isbn === book2.isbn) {
    console.log("Same isbn value, same book.");
} else {
    console.log("Different books.");
}

console.log();

// d. Create two book objects with the same values and check identity
const book3 = Object.assign({}, book1);
const book4 = Object.assign({}, book1);

console.log('book3:');
console.log(`ISBN: ${book3.isbn}`);
console.log(`Name: ${book3.name}`);
console.log(`Authors: ${book3.authors.join(', ')}`);
console.log(`Publication Date: ${book3.publicationDate}`);

console.log();

console.log('book4:');
console.log(`ISBN: ${book4.isbn}`);
console.log(`Name: ${book4.name}`);
console.log(`Authors: ${book4.authors.join(', ')}`);
console.log(`Publication Date: ${book4.publicationDate}`);
console.log();

console.log('result:');
if (book3 === book4) {
    console.log("Same identity.");
} else {
    console.log("Different identity.");
}
