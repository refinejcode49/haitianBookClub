import React, { useState, useEffect, useRef } from "react";
import BooksContainer from "./components/BooksContainer";
import Header from "./components/Header";
import DetailPanel from "./components/DetailPanel";
import Search from "./components/Search";
import { GlobalStyle } from "./styles";
import { Transition } from "react-transition-group";

const App = () => {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [showPanel, setShowPanel] = useState(false);
  const [filteredBooks, setFilteredBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/bookClubH.json");
        const books = await response.json();
        setBooks(books);
        setFilteredBooks(books);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const pickBook = (book) => {
    setSelectedBook(book);
    setShowPanel(true);
  };

  const closePanel = () => {
    setShowPanel(false);
  };

  const filterBooks = (searchTerm) => {
    const stringSearch = (bookAttribute, searchTerm) =>
      bookAttribute.toLowerCase().includes(searchTerm.toLowerCase());

    if (!searchTerm) {
      setFilteredBooks(books);
    } else {
      setFilteredBooks(
        books.filter((book) => stringSearch(book.author, searchTerm))
      );
    }
  };

  const hasFiltered = filteredBooks.length !== books.length;

  const panelRef = useRef(null);
  return (
    <>
      <GlobalStyle />
      <Header>
        <Search filterBooks={filterBooks} />
      </Header>
      <BooksContainer
        books={filteredBooks}
        pickBook={pickBook}
        isPanelOpen={showPanel}
        title={hasFiltered ? "Résultats de la recherche" : "Tous les livres"}
      />
      <Transition in={showPanel} timeout={300} nodeRef={panelRef}>
        {(state) => (
          <DetailPanel
            book={selectedBook}
            closePanel={closePanel}
            state={state}
            panel={panelRef}
          />
        )}
      </Transition>
    </>
  );
};

export default App;
