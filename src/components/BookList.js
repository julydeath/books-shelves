import React from "react";
import BookShow from "./BookShow";

const BookList = ({ books, handleDelete, handleEdit }) => {
  return (
    <div>
      {books.map((book) => (
        <div key={book.id}>
          <BookShow
            book={book}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        </div>
      ))}
    </div>
  );
};

export default BookList;
