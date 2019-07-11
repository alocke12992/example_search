import React, { useState } from 'react';
import Search from './Search';
import './App.css';

function App() {
  const [query, setQuery] = useState("")
  const getData = (query) => {
    // DO SOMETHING WITH QUERY - LIKE REQUEST DATA FROM AN API
    setQuery(query)
  }
  return (
    <div className="App">
      <Search getData={getData} />
      <h1>Query</h1>
      <p>{query}</p>
    </div>
  );
}

export default App;
