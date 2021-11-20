import React from "react";
import { Link } from "react-router-dom";

const LINKS = [
  {
    to: "/",
    text: "Home",
  },
  {
    to: "/starred",
    text: "Starred",
  },
];

const Navs = () => {
  return (
    <div>
      <ul>
        {LINKS.map((Element) => (
          <li key={Element.to}>
            <Link to={Element.to}>{Element.text}</Link>{" "}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navs;
