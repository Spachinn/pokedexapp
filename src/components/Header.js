import React from "react";
import { InputGroup, FormControl } from "react-bootstrap";

export default function Header({ filterPokeman }) {
  return (
    <div className="header">
      <div className="header-one">
        <h1>Pokédex</h1>
      </div>
      <div className="header-two">
        <div className="search-container">
          <label htmlFor="search">
            Search for any Pokémon that exists on the planet
          </label>
          <InputGroup>
            <FormControl
              placeholder="Search"
              aria-label="Search"
              aria-describedby="basic-addon2"
              onChange={(e) => filterPokeman(e.target.value)}
            />
          </InputGroup>
        </div>
      </div>
    </div>
  );
}
