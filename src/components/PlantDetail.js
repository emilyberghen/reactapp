import React from "react";
import CareList from "./CareList";

function PlantDetail({ name, description, image, care }) {
  return (
    <section id={name.toLowerCase().replace(/ /g, "-")} className="plantDetail">
      <h1>{name}</h1>
      <div className="info">
        <img src={`../../`+image} alt={name}></img>
        <section>
          <p>{description}</p>
          <CareList list={care} className="care"/>
        </section>
      </div>
    </section>
  );
}

export default PlantDetail;