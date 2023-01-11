const book = {
  color: "red",
  price: 20,
  bookName: "javaScript",
  autuor: "toni",
  yearWriten: 2022,
};

function bookObj(book) {
  return `the book ${book.bookName} was written by ${book.autuor} in the year ${book.yearWriten}`;
}

console.log(bookObj(book));
