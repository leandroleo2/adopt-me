import React from "react";
import Pet from "./Pet";

const Results = ({ pets }) => {
  return (
    <div className="search">
      {pets.length === 0 ? (
        <h1>No Pets Found</h1>
      ) : (
        pets.map((pet) => (
          <Pet
            id={pet.id}
            key={pet.id}
            name={pet.name}
            animal={pet.type}
            breed={pet.breeds.primary}
            location={`${pet.contact.address.city}, ${pet.contact.address.state}`}
            media={pet.photos}
          />
        ))
      )}
    </div>
  );
};

export default Results;
