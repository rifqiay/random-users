import React from "react";
import { BsSearch } from "react-icons/bs";

const Search = ({ setKeyword, handleSearch }) => {
  return (
    <>
      <section>
        <h4>Search</h4>
        <div className="relative border-2 w-72">
          <input
            type="search"
            placeholder="search..."
            className="p-2 focus:outline-none w-4/5"
            onChange={(e) => setKeyword(e.target.value)}
          />
          <span
            className="absolute right-2 px-5 py-3 right-0 bg-blue-500 cursor-pointer text-white hover:bg-blue-600"
            onClick={handleSearch}
          >
            <BsSearch />
          </span>
        </div>
      </section>
    </>
  );
};

export default Search;
