import React, { useState } from "react";

const SearchForm = ({ search }) => {

  const [valueInput, setValueInput] = useState("");
  
  const handleFormSubmit = (event) => {
    event.preventDefault();
    // search('Hello');
    search(valueInput);
  };

  const handleChange = (event) => {
    setValueInput(event.target.value);
  };

  return (
    <div>
      <div className="form__group">
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            className="form__input"
            id="search"
            placeholder="Search"
            value={valueInput}
            onChange={handleChange}
          />

          {/* <div>{valueInput}</div> */}

        </form>
      </div>
    </div>
  );
};

export default SearchForm;
