import React, { useState } from "react";
import BookCreate from "./components/BookCreate";
import { nanoid } from "nanoid";
import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = useState([]);
  console.log(books);

  const getBooks = (title) => {
    const newBooks = [...books, { id: nanoid(), title: title }];
    setBooks(newBooks);
  };

  const deleteBook = (id) => {
    const newList = books.filter((book) => book.id !== id);
    setBooks(newList);
  };

  const editBook = (id, title) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...books, title: title };
      }
      return book;
    });
    setBooks(updatedBooks);
  };

  return (
    <div>
      <h1>Books List</h1>
      <BookCreate getBooks={getBooks} />
      <BookList books={books} deleteBook={deleteBook} editBook={editBook} />
    </div>
  );
}

export default App;
