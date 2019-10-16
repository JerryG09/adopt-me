import React, { useState } from "react";
import { ANIMALS } from "@frontendmasters/pet";

const SearchParams = () => {
  const [location, setLocation] = useState("Seatle, WA");
  const [animal, setAnimal] = useState("dog");
  const [breed, setBreed] = useState("");
  const [breeds, setBreeds] = useState([])

  return (
    <div className="search-params">
      <h1>{location}</h1>
      <form action="#">
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={e => setLocation(e.target.value)}
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={e => setAnimal(e.target.value)}
            onBlur={e => setAnimal(e.target.value)}
          >
            <option>All</option>
            {ANIMALS.map(animal => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select
            name="breed"
            id="breed"
            value={breed}
            onChange={e => setBreed(e.target.value)}
            onBlur={e => setBreed(e.target.value)}
            disabled={breeds.length === 0}
          >
            <option value="all">All</option>
            {breeds.map(breedStr => (
              <option key={breedStr} value={breedStr}>
                {breedStr}
              </option>
            ))}
          </select>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
