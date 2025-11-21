import React from "react";
import { Author, Title, Container, Cover } from "./styles";

const Book = ({ book, pickBook, isLarge }) => {
  const bookData = Array.isArray(book.book) ? book.book[0] : book.book || {};
  const title =
    bookData?.fr?.title ?? bookData?.title ?? book.title ?? "Titre inconnu";
  const cover =
    bookData?.fr?.coverImage ??
    bookData?.fr?.coverimage ??
    bookData?.fr?.image ??
    bookData?.coverImage ??
    bookData?.coverimage ??
    bookData?.image ??
    "";
  const author = book?.author ?? "Auteur inconnu";

  return (
    <Container $isLarge={isLarge} onClick={() => pickBook(book)}>
      <Cover
        alt={`Couverture du livre ${title} écrit par ${author}`}
        src={cover}
      />
      <figcaption>
        <Title $isLarge={isLarge}>{title}</Title>
        <Author>Par {author}</Author>
      </figcaption>
    </Container>
  );
};

export default Book;
