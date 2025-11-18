class Book {
    constructor(title, author, isbn, issued) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.issued = issued;
    }
    issueBook() {
        this.issued = true;
    }
    returnBook() {
        this.issued = false;
    }
}
var books = [
    new Book("Book A", "Author A", "111", false),
    new Book("Book B", "Author B", "222", true),
    new Book("Book C", "Author C", "333", false)
];
var available = [];
for (var i = 0; i < books.length; i++) {
    if (!books[i].issued) available.push(books[i]);
}
for (var j = 0; j < available.length; j++) console.log(available[j].title);
function issueByISBN(code) {
    for (var i = 0; i < books.length; i++) {
        if (books[i].isbn === code) {
            books[i].issueBook();
            return books[i];
        }
    }
}
console.log(issueByISBN("333"));
