import React, { useState } from "react";

const BookEdit = ({ book, editBook }) => {
  const [newtitle, setNewTitle] = useState(book.title);

  const handleSubmit = (e) => {
    e.preventDefault();
    editBook(book.id, newtitle);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={newtitle}
        type="text"
        placeholder="New title ..."
        onChange={(e) => setNewTitle(e.target.value)}
      />
      <button>SAVE</button>
    </form>
  );
};

export default BookEdit;
