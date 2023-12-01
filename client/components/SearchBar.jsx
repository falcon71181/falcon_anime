import React, { useState } from "react";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    window.location.href = `${process.env.NEXT_PUBLIC_SERVER}/anime/search/${encodeURIComponent(searchTerm.trim().replace(/ +/g, ' ').replace(/ /g, '+'))}`;
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="max-w-14em w-[100%] h-fit-content">
        <div className="flex items-center flex-row bg-gray-700 rounded-2xl overflow-hidden">
          <svg
            className="h-6 w-6 ml-5 text-gray-400 fill-current"
            viewBox="0 0 48 48"
            alt="search icon"
          >
            <path d="M46.599 46.599a4.498 4.498 0 0 1-6.363 0l-7.941-7.941C29.028 40.749 25.167 42 21 42 9.402 42 0 32.598 0 21S9.402 0 21 0s21 9.402 21 21c0 4.167-1.251 8.028-3.342 11.295l7.941 7.941a4.498 4.498 0 0 1 0 6.363zM21 6C12.717 6 6 12.714 6 21s6.717 15 15 15c8.286 0 15-6.714 15-15S29.286 6 21 6z">
    </path>
          </svg>
          <input
            className="bg-transparent text-white outline-none w-full py-1 pl-8 text-base"
            id="inputBox"
            type="text"
            placeholder="Search for anything ..."
            value={searchTerm}
            onChange={handleInputChange}
          />
        </div>
      </form>
    </div>
  );  
};

export default SearchBar;
