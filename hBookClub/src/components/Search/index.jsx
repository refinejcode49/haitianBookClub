import React, { useRef, useState } from "react";
import { SearchContainer, Input, Icon, Wrapper } from "./styles";
import SearchSVG from "../../assets/search.svg";
import { Close } from "../../styles";

const Search = ({ filterBooks }) => {
  const inputEl = useRef(null);
  const [showOnDesktop, setShowOnDesktop] = useState();

  const handleChange = (event) => {
    filterBooks(event.target.value);
  };

  const clearSearch = () => {
    filterBooks(""); // to clearout the search results
    inputEl.current.value = ""; // to clearout the input filed
    setShowOnDesktop(false);
  };

  const showSearch = () => {
    setShowOnDesktop(true);
  };

  return (
    <Wrapper>
      <SearchContainer $showOnDesktop={showOnDesktop}>
        <Icon src={SearchSVG} title="search icon" onClick={showSearch} />
        <Input
          ref={inputEl}
          type="text"
          name="search"
          autoComplete="off"
          onChange={handleChange}
        />
        <Close onClick={clearSearch} />
      </SearchContainer>
    </Wrapper>
  );
};

export default Search;
