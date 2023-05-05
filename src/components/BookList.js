import React from "react";
import BookShow from "./BookShow";

const BookList = ({ books, handleDelete }) => {
  return (
    <div>
      {books.map((book) => (
        <div key={book.id}>
          <BookShow book={book} handleDelete={handleDelete} />
        </div>
      ))}
    </div>
  );
};

export default BookList;
