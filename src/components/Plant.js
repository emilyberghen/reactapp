import React from "react";
import { Link } from 'react-router-dom';

function Plant({ name, image, slug }) {
  return (
    <section id={name.toLowerCase().replace(/ /g, "-")}>
      <img src={image} alt={name}></img>
      <div>
        <h2>{name}</h2>
        <Link to={`/plant/${slug}`}>More</Link>
      </div>
    </section>
  );
}

export default Plant;