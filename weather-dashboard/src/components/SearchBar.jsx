import { useState } from "react";

function SearchBar({ onSearch }) {

  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(city);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <button type="submit">Get Weather</button>
    </form>
  );
}

export default SearchBar;