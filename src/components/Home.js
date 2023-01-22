import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Header";
import PokemanCard from "./PokemanCard";

export default function Home() {
  const [pokemanData, setPokemanData] = useState([]);
  useEffect(() => {
    getPokemons();
  }, []);

  // Fetching pokeman data from API
  const getPokemons = () => {
    let endpoints = [];
    for (let i = 1; i <= 100; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
    }
    axios
      .all(endpoints.map((endpoint) => axios.get(endpoint)))
      .then((res) => setPokemanData(res));
  };

  //pokeman filter functionality
  const filterPokeman = (name) => {
    let pokemanArray = [];
    if (name === "") {
      getPokemons();
    }
    for (let i in pokemanData) {
      if (pokemanData[i].data.name.includes(name)) {
        pokemanArray.push(pokemanData[i]);
      }
    }
    setPokemanData(pokemanArray);
  };

  //modal pop-up

  return (
    <div className="home">
      <Header filterPokeman={filterPokeman} />
      {pokemanData.map((list, index) => {
        return (
          <PokemanCard
            key={list.data.id}
            className="pokeman-card"
            name={list.data.name}
            image={list.data.sprites.front_default}
            id={list.data.id}
            height={list.data.height}
            weight={list.data.weight}
            abilities={list.data.abilities.map((data) => {
              return data.ability.name;
            })}
            type={list.data.types.map((data) => {
              return data.type.name;
            })}
          />
        );
      })}
    </div>
  );
}
