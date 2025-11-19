import React, { useState, useEffect } from "react";
import BooksContainer from "./components/BooksContainer";
import Header from "./components/Header";
import { GlobalStyle } from "./styles";

const App = () => {
  const [books, setBooks] = useState([]);

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

  return (
    <>
      <GlobalStyle />
      <Header />
      <BooksContainer books={books} />;
    </>
  );
};

export default App;
