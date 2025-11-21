import React, { useState, useEffect } from "react";
import BooksContainer from "./components/BooksContainer";
import Header from "./components/Header";
import DetailPanel from "./DetailPanel";
import { GlobalStyle } from "./styles";

const App = () => {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/bookClubH.json");
        console.log("here is what the fetch request returns", response);
        const books = await response.json();
        console.log("our json-ified response: ", books);
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

  console.log(selectedBook);

  return (
    <>
      <GlobalStyle />
      <Header />
      <BooksContainer books={books} pickBook={pickBook} />;
      {/*Si le selectedBook est seclectionné, afficher le panel sinon erreur cannot read property of null */}
      {selectedBook && <DetailPanel book={selectedBook} />}
    </>
  );
};

export default App;
