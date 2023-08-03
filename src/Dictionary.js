import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [loaded, setLoaded] = useState(false);
  let [results, setResults] = useState({});

  function handleResponse(response) {
    setResults(response.data);
  }
  function search() {
    let apiKey = "fo0aeaadb1171c3bat01accf9c25f94b";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }
  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h1>What word do you want to look up?</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="Enter a word..."
              onChange={handleKeywordChange}
              id="searchEngine"
              defaultValue={props.defaultKeyword}
            />
          </form>
          <div className="hint">
            you can type words like: music, yoga, happiness, awsomeness..
          </div>
        </section>

        <Results results={results} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
