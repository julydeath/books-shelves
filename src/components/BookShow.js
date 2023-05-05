import React, { useState } from "react";
import BookEdit from "./BookEdit";

const BookShow = ({ book, handleDelete, handleEdit }) => {
  const [edit, setEdit] = useState(false);

  const bookDelete = () => {
    handleDelete(book.id);
  };

  let content = <h2>{book.name}</h2>;

  if (edit) {
    content = <BookEdit handleEdit={handleEdit} book={book} />;
  }

  return (
    <span>
      <div>{content}</div>
      <button onClick={bookDelete}>Delete</button>
      <button onClick={() => setEdit(!edit)}>Edit</button>
    </span>
  );
};

export default BookShow;
