import React from "react";
import { Panel, Em, P } from "./styles";
import Book from "../components/Book";

const DetailPanel = ({ book }) => {
  const bookData = Array.isArray(book.book) ? book.book[0] : book.book || {};
  const description = bookData?.fr?.description ?? "Description non disponible";
  const year = bookData?.published ?? "Année non disponible";

  return (
    <Panel>
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
    </Panel>
  );
};

export default DetailPanel;
