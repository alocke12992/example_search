import React, { useState } from 'react'

const Search = ({getData}) => {
  const [query, setQuery] = useState();
  // CAPTURE THE FORM DATA, then send it up to APP to make the query
  const handleSubmit = (e) => {
    e.preventDefault()
    getData(query)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="query"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  )
};

export default Search;
