import React, { useState } from "react";

const BookCreate = ({ onSubmit }) => {
  const [book, setBook] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(book);
    setBook("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={book}
          onChange={(e) => setBook(e.target.value)}
        />
        <button>Add</button>
      </form>
    </div>
  );
};

export default BookCreate;
