import React, { useState } from "react";

const BookEdit = ({ handleEdit, book }) => {
  const [newtitle, setNewTitle] = useState(book.name);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleEdit(book.id, newtitle);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setNewTitle(e.target.value)} />
        <button>SAVE</button>
      </form>
    </div>
  );
};

export default BookEdit;
