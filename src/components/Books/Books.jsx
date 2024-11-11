import { useState, useEffect } from "react";
import Book from "../Book/Book";

const Books = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("/booksData.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div>
      <h1 className="text-4xl font-bold text-center">Books</h1>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 mb-5">
        {books.map((book) => (
          <Book key={book.bookId} book={book}></Book>
        ))}
      </div>
    </div>
  );
};

export default Books;
