import React, { useState } from 'react';
import Care from "./Care";

export default function CareList({ list }) {
  const [checked, setChecked] = useState(false);
  return (
    <div class="care">
      <h3>Care</h3>

      <input
      type="checkbox"
      value={checked}
      onChange={() =>
      setChecked(checked => !checked)
      } />
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