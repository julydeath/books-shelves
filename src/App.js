import React, { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import { nanoid } from "nanoid";

function App() {
  const [books, setBooks] = useState([]);
  console.log(books);

  const createBooks = (name) => {
    const newBooks = [...books, { id: nanoid(), name: name }];
    setBooks(newBooks);
  };

  const handleDelete = (id) => {
    const filterBooks = books.filter((book) => book.id !== id);
    setBooks(filterBooks);
  };

  return (
    <div>
      <BookCreate onSubmit={createBooks} />
      <BookList books={books} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
