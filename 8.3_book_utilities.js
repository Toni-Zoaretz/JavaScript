const book1 = {
  name: "world1",
  author: "toni",
  year: 2012,
};

const book2 = {
  name: "word2",
  author: "toni",
  year: 2010,
};

const bookUtils = {
  getFirstPublished: function (book1, book2) {
    if (book1.year < book2.year) {
      return book1;
    } else {
      return book2;
    }
  },

  setNewEdition: function (book, editionYear) {
    book.lastesEdition = editionYear;
  },

  setLanguage: function (book, language) {
    book.language = language;
  },

  setTranslation: function (book, language, translator) {
    book.translation = { language, translator };
  },

  setPublisher: function (book, name, location) {
    book.publisher = { name, location };
  },

  isSamePublisher: function (book1, book2) {
    if (
      book1.publisher?.name === book2.publisher?.name &&
      book1.publisher?.location === book2.publisher?.location
    ) {
      return true;
    }
    return false;
  },
};

console.log(bookUtils.isSamePublisher(book1, book2));
console.log(book1, book2);

// bookUtils.setPublisher(book1, "lily", "india");
// console.log(book1);

// bookUtils.setLanguage(book2, "spanish");
// console.log(book2);

// bookUtils.setNewEdition(book1, 1990);
// console.log(book1);

// const bookUtils = {
//   setNewEdition: function (book, edtionYear) {
//     book["latestEdition"] = edtionYear;
//   },

//   setLanguage: function (book, language) {
//     book["language"] = language;
//   },
//   setTranslation: function (book, language, translator) {
//     book["translation"] = { translator: translator, language: language };
//   },
// };
