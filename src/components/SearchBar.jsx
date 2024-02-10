import { useState } from "react";

function SearchBar({ filterProducts }) {
  const [value, setValue] = useState("");

  const handleValue = e => {
      setValue(e.target.value)
      filterProducts(e.target.value)
  }

  return (
      <div>
          <p>Search</p>
          <label>
              <input
                  onChange={handleValue}
                  value={value}
                  type="search"
                  placeholder="Search...">
              </input>
          </label>
      </div>
  );
}

export default SearchBar;