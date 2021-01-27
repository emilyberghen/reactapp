import React from 'react';
import { Link } from 'react-router-dom';

import plants from "../data/plants.json"
import PlantDetail from "../components/PlantDetail"

function PlantPage({ match }) {
  const { params: { plant } } = match;

  const index = plants.map((el) => el.slug).indexOf(plant)
  const currentPlant = plants[index]

  return (
    <>
      <PlantDetail {...currentPlant}></PlantDetail>  
      <Link to={`/`} className="link">Go back</Link>
    </>
  );
}

export default PlantPage;