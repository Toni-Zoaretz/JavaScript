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
  setNewEdition: function (book, edtionYear) {
    book["latestEdition"] = edtionYear;
  },

  setLanguage: function (book, language) {
    book["language"] = language;
  },
  setTranslation: function (book, language, translator) {
    book["translation"] = { translator: translator, language: language };
  },
};
