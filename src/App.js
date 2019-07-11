import React, { useState } from 'react';
import Search from './Search';
import './App.css';

function App() {
  const [results, setResults] = useState("")
  const getData = (query) => {
    // DO SOMETHING WITH QUERY - LIKE REQUEST DATA FROM AN API
    // I am setting results with the query just to show you how to capture
    // state from a child component
    setResults(query)
  }
  return (
    <div className="App">
      <Search getData={getData} />
      <h1>Query</h1>
      <p>{results}</p>
    </div>
  );
}

export default App;
