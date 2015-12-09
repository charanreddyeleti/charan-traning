var books = [
  {title: "The Hobbit",
   author: "J.R.R. Tolkien",
   alreadyRead: true
  },
  {title: "The Lord of the Rings",
  author: "J.R.R. Tolkien",
  alreadyRead: false
  }];

for (var i = 0; i < books.length; i++) {
  var book = books[i];
  var bookInfo = book.title + '" by ' + book.author;
  if (book.alreadyRead) {
    console.log('You already read "' + bookInfo);
  } else {
    console.log('You still need to read "' + bookInfo);
  }
}