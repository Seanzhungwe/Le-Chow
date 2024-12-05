import { useState } from 'react';

const SearchBar = ({ setSearchQuery }) => {
  // Local state to store the input value
  const [query, setQuery] = useState('');

  // Event handler for when the user types in the input field
  const handleChange = (event) => {
    setQuery(event.target.value); // Update the local query state
    setSearchQuery(event.target.value); // Update the parent's search query state
  };

  return (
    <div className="mb-4">
      {/* Input field for search */}
      <input
        type="text"
        value={query} // Controlled input, value is based on query state
        onChange={handleChange} // Trigger handleChange when the user types
        placeholder="Search images..." // Placeholder text
        className="w-full max-w-md mx-auto p-2 border border-gray-300 rounded-md" // Styling for the input
      />
    </div>
  );
};

export default SearchBar;
