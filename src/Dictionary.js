import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  let [results, setResults] = useState({});

  function handleResponse(response) {
    setResults(response.data);
  }

  function search(event) {
    event.preventDefault();
    let apiKey = "fo0aeaadb1171c3bat01accf9c25f94b";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input
          type="search"
          placeholder="Enter a word..."
          onChange={handleKeywordChange}
          id="searchEngine"
        />
      </form>
      <Results results={results} />
    </div>
  );
}
