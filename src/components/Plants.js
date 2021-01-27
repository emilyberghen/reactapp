import React from "react";
import Plant from "./Plant";

function Plants({ plants }) {
  return (
    <article>
      <header>
        <h1>Popular houseplants</h1>
      </header>
      <div className="plants">
        {plants.map((plant, i) => (
          <Plant key={i} {...plant} />
        ))}
      </div>
    </article>
  );
}

export default Plants;