import React from "react";
import BookShow from "./BookShow";

const BookList = ({ books, deleteBook, editBook }) => {
  return (
    <div>
      {books.map((book) => (
        <div key={book.id}>
          <BookShow book={book} deleteBook={deleteBook} editBook={editBook} />
        </div>
      ))}
    </div>
  );
};

export default BookList;
