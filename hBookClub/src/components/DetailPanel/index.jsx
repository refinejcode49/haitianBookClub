import React, { useRef, useEffect } from "react";
import { Panel, Em, P, CloseWrapper, BG } from "./styles";
import { Close } from "../../styles";
import Book from "../Book";

const DetailPanel = ({ book, closePanel, state, panelRef }) => {
  const panelEl = useRef(null);
  const prevBook = useRef(null);

  const setPanelRef = (node) => {
    panelEl.current = node;
    if (panelRef) {
      panelRef.current = node;
    }
  };

  useEffect(() => {
    if (prevBook.current !== book) {
      panelEl.current.scrollTop = 0;
    }

    prevBook.current = book;
  }, [book, prevBook]);

  if (!book) return null;
  const bookData = Array.isArray(book?.book) ? book.book[0] : book?.book || {};
  const description = bookData?.fr?.description ?? "Description non disponible";
  const year = bookData?.published ?? "Année non disponible";

  return (
    <>
      <BG onClick={closePanel} $state={state} />
      <Panel $state={state} ref={setPanelRef}>
        <CloseWrapper onClick={closePanel} $state={state}>
          <Close />
        </CloseWrapper>

        {book && (
          <>
            <Book book={book} isLarge={true} />
            {/*<figure>
        <img alt={title} src={cover} />
        <h3>‹{title}</h3>
        <h4>Par {author}</h4>
      </figure>*/}
            <P>{description}</P>
            <P>
              <Em>Publié en {year}</Em>
            </P>
          </>
        )}
      </Panel>
    </>
  );
};

export default DetailPanel;
