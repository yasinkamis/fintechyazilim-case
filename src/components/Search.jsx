import React from "react";
import styled from "styled-components";

const Search = ({ handlerPushSearchPage, search, setSearch }) => {
  return (
    <>
      <label htmlFor="country-search" className="my-2 form-label">
        Arama Yap
      </label>
      <div className="d-flex">
        <SearchInput
          type="text"
          id="country-search"
          placeholder="Arama Yap"
          className="px-2 py-1 form-control"
          onChange={(e) => setSearch(e.target.value)}
        />
        <SearchButton
          type="button"
          className="btn btn-info text-light"
          onClick={search && handlerPushSearchPage}
        >
          ARA
        </SearchButton>
      </div>
    </>
  );
};

export default Search;

const SearchInput = styled.input`
  border-radius: 10px 0 0 10px;
  &:focus {
    outline: none;
    box-shadow: none;
  }
`;

const SearchButton = styled.button`
  border-radius: 0 10px 10px 0;
`;
