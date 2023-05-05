import React, { useState } from "react";

const BookCreate = ({ getBooks }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    getBooks(title);
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={title}
        type="text"
        placeholder="Enter name ..."
        onChange={(e) => setTitle(e.target.value)}
      />
      <button>ADD</button>
    </form>
  );
};

export default BookCreate;
