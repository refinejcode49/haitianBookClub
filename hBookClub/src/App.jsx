import React, { useState, useEffect } from "react";
import BooksContainer from "./components/BooksContainer";
import Header from "./components/Header";
import DetailPanel from "./components/DetailPanel";
import { GlobalStyle } from "./styles";

const App = () => {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/bookClubH.json");
        const books = await response.json();
        setBooks(books);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const pickBook = (book) => {
    setSelectedBook(book);
  };

  const closePanel = () => {
    setSelectedBook(null);
  };

  return (
    <>
      <GlobalStyle />
      <Header />
      <BooksContainer
        books={books}
        pickBook={pickBook}
        isPanelOpen={selectedBook !== null}
      />
      ;
      {/*Si le selectedBook est seclectionné, afficher le panel sinon erreur cannot read property of null */}
      {selectedBook && (
        <DetailPanel book={selectedBook} closePanel={closePanel} />
      )}
    </>
  );
};

export default App;
