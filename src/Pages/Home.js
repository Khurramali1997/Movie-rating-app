import React, { useState } from "react";
import { apiGet } from "../misc/config";
import MainPage from "../components/MainPage";
function Home() {
  const [input, setInput] = useState("");
  const [results, setResults] = useState(null);
  const onInputChange = (ev) => {
    setInput(ev.target.value);
    //console.log(ev.target.value);
  };

  const onSearch = () => {
    //https://api.tvmaze.com/search/shows?q=girls
    apiGet(`/search/shows?1=${input}`).then((results) => {
      setResults(results);
      console.log(results);
    });
  };
  const OnKeyDown = (ev) => {
    if (ev.keyCode === 13) {
      onSearch();
    }
  };

  const renderResults = () => {
    if (results && results.length === 0) {
      return <div>No Item</div>;
    }
    if (results && results.length > 0) {
      return (
        <div>
          {results.map((item) => (
            <div key={item.show.id}>{item.show.name}</div>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <MainPage>
      <input
        type="text"
        name="text"
        id="name"
        onChange={onInputChange}
        onKeyDown={OnKeyDown}
        value={input}
      />
      <button type="button" onClick={onSearch}>
        Search
      </button>
      {renderResults()}
    </MainPage>
  );
}

export default Home;
