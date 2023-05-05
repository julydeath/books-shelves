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

  const handleEdit = (id, newTitle) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...books, name: newTitle };
      }
      return book;
    });
    setBooks(updatedBooks);
  };

  return (
    <div>
      <BookCreate onSubmit={createBooks} />
      <BookList
        books={books}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
    </div>
  );
}

export default App;
