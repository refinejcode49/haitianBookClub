import React, { useState, useEffect } from "react";

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

  return <div>Hello world</div>;
};

export default App;
