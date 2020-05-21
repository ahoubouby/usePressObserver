import React from "react";

export default function Button({ active }) {
  return (
    <a href="#" className={"button" + (active ? " active" : "")}>
      <span>\n</span>
    </a>
  );
}
