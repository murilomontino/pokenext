import { useDeferredValue, useEffect, useState } from "react";
import CardPokemon from "~/components/molecules/card-pokemon/card-pokemon";
import MyButtons from "~/components/molecules/geration-pokemon/geration-pokemon";
import api from "~/services/api";
import { ListPokemons } from "~/types/pokemons";


const HomePage = () => {
  const [pokemons, setPokemons] = useState<ListPokemons[]>([]);
  const [text, setText] = useState('')
  const [query, setQuery] = useState<ListPokemons[]>([]);
  const [activeIndex, setActiveIndex] = useState(1);
  const [filteredPokemons, setFilteredPokemons] = useState<ListPokemons[]>([]);
  const deferredQuery = useDeferredValue(query);

  const fetchPokemons = async () => {
    const { status, data } = await api.get("/pokemon?limit=10000");

    if (status === 200) {
      setPokemons(data.results);
      setQuery(data.results)
    }
  };

  const firstGen = pokemons.slice(0, 151)
  const firstGenSliced = firstGen.slice(0, 151);
  const secondGen = pokemons.slice(151, 251)
  const secondGenSliced = secondGen.slice(0, 100);
  const threeGen = pokemons.slice(251, 386)
  const threeGenSliced = threeGen.slice(0, 135);


  useEffect(() => {
    fetchPokemons();
  }, []);

  console.log(activeIndex);


  useEffect(() => {
    const filt1gen = () => {
      if (!text) {
        return firstGen;
      } else {
        return firstGenSliced.filter((item) => (item.name.includes(text.toLowerCase())))
      }
    }
    const filt2gen = () => {
      if (!text) {
        return secondGen;
      } else {
        return secondGenSliced.filter((item) => (item.name.includes(text.toLowerCase())))
      }
    }
    const filt3gen = () => {
      if (!text) {
        return threeGen;
      } else {
        return threeGenSliced.filter((item) => (item.name.includes(text.toLowerCase())))
      }
    }
    if (activeIndex === 1) {
      setFilteredPokemons(filt1gen())
    } else if (activeIndex === 2) {
      setFilteredPokemons(filt2gen())
    }
    else if (activeIndex === 3) {
      setFilteredPokemons(filt3gen())
    } else if (!activeIndex) {
      setPokemons(firstGen)
    }
  }, [text, activeIndex]);

  return (
    <>
      <div className="flex flex-col justify-center items-center mb-4">
        <label htmlFor="">POKE API</label>
        <input className="text-black rounded-lg p-2" value={text} onChange={(e) => setText(e.target.value)} type="text" placeholder="Digite seu pokemon" />
      </div>
      <MyButtons setActiveIndex={setActiveIndex} />
      {activeIndex === 1 && (
        <div className="flex gap-2 flex-wrap justify-center">
          {
            filteredPokemons.map((pokemon) => (
              <CardPokemon key={pokemon.name} name={pokemon.name} url={pokemon.url} />
            ))
          }
        </div>
      )}
      {activeIndex === 2 && (
        <div className="flex gap-2 flex-wrap justify-center">
          {
            filteredPokemons.map((pokemon) => (
              <CardPokemon key={pokemon.name} name={pokemon.name} url={pokemon.url} />
            ))
          }
        </div>
      )}
      {activeIndex === 3 && (
        <div className="flex gap-2 flex-wrap justify-center">
          {
            filteredPokemons.map((pokemon) => (
              <CardPokemon key={pokemon.name} name={pokemon.name} url={pokemon.url} />
            ))
          }
        </div>
      )}
    </>
  );
};

export default HomePage;
