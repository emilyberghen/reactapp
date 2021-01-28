import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Care from "./Care";

export default function CareList({ list }) {
  const [checked, setChecked] = useState(false);
  const [title, setTitle] = useState("show");

  return (
    <div class="care">
      <h3>Care</h3>

      <Link
      to="#"
      onClick={() =>
      setChecked(checked => !checked, setTitle(title === "show" ? "hide" : "show"))
      }>{title}</Link>
      {checked ? 
      
      <ul>
        {list.map((care, i) => (
          <Care key={i} {...care} />
        ))}
      </ul> 
      
      : ""}

      
    </div>
  );
}