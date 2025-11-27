import React, { useState, useEffect, useRef } from "react";
import BooksContainer from "./components/BooksContainer";
import Header from "./components/Header";
import DetailPanel from "./components/DetailPanel";
import { GlobalStyle } from "./styles";
import { Transition } from "react-transition-group";

const App = () => {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [showPanel, setShowPanel] = useState(false);

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
    setShowPanel(true);
  };

  const closePanel = () => {
    setShowPanel(false);
  };

  const panelRef = useRef(null);
  return (
    <>
      <GlobalStyle />
      <Header />
      <BooksContainer
        books={books}
        pickBook={pickBook}
        isPanelOpen={showPanel}
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
