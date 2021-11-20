import React, { useState } from "react";
import MainPage from "../components/MainPage";
function Home() {
  const [input, setInput] = useState("");
  const onInputChange = (ev) => {
    setInput(ev.target.value);
    //console.log(ev.target.value);
  };

  const onSearch = () => {
    //https://api.tvmaze.com/search/shows?q=girls
    fetch(`https://api.tvmaze.com/search/shows?q=${input}`)
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  const OnKeyDown = (ev) => {
    if (ev.keyCode === 13) {
      onSearch();
    }
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
    </MainPage>
  );
}

export default Home;
