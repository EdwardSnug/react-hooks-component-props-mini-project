import React from "react";

function Header({name}) {
  return (
    <header>
      <h1 id="headerTitle" style={{ color: "white" }}>
        {name}
      </h1>
    </header>
  );
}

export default Header;