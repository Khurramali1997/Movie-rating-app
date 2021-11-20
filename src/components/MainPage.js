import React from "react";
import Navs from "./Navs";
import Title from "./Title";

function MainPage({ children }) {
  return (
    <div>
      <Title
        title={"MOVIES"}
        subtitle="Your personal movie and actors search engine"
      ></Title>
      <Navs></Navs>
      {children}
    </div>
  );
}

export default MainPage;
