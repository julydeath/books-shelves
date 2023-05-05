import React, { useState } from "react";
import BookEdit from "./BookEdit";

const BookShow = ({ book, deleteBook, editBook }) => {
  const [edit, setEdit] = useState(false);

  const handleDelete = () => {
    deleteBook(book.id);
  };

  return (
    <div>
      {edit ? (
        <BookEdit book={book} editBook={editBook} />
      ) : (
        <h2>{book.title}</h2>
      )}
      <button onClick={handleDelete}>DELETE</button>
      <button onClick={() => setEdit(!edit)}>EDIT</button>
    </div>
  );
};

export default BookShow;
