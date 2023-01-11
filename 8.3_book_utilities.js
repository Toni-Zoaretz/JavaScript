const book1 = {
  bookName: "world",
  author: "toni",
  year: 2012,
};

const book2 = {
  bookName: "wordls2",
  author: "toni2",
  year: 2011,
  bookUtils: "",
};

const bookUtils = {
  getFirstPublished: function (book1, book2) {
    if (book1.year > book2.year) {
      return book1;
    } else {
      return book2;
    }
  },

  setNewEdition: function (book, edtionYear) {},
};

console.log(bookUtils.getFirstPublished(book1, book2));

/*add to the bookUtils object a function setNewEdition, that
receives a book and an edition year and sets a new
property latestEdition with the edition year, or updates an
existing one.*/
