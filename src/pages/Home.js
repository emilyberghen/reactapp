import React from 'react';

import Plants from "../components/Plants";
import data from "../data/plants.json";

const PlantPage = () => {
  return (
    <>
      <h1>Plant library</h1>
      <p>Get to know more about your plants so you can make your favorite ones even happier; and so you can stop killing the others.</p>
      <Plants plants={data} />
    </>
  )};

export default PlantPage;