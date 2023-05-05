import React from "react";

const BookShow = ({ book, handleDelete }) => {
  const bookDelete = () => {
    handleDelete(book.id);
  };

  return (
    <span>
      <h2>{book.name}</h2>
      <button onClick={bookDelete}>Delete</button>
      <button>Edit</button>
    </span>
  );
};

export default BookShow;
