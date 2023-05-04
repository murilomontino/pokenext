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
  const deferredQuery = useDeferredValue(query);

  const fetchPokemons = async () => {
    const { status, data } = await api.get("/pokemon?limit=10000");

    if (status === 200) {
      setPokemons(data.results);
      setQuery(data.results)
    }
  };

  useEffect(() => {
    fetchPokemons();
  }, []);



  useEffect(() => {
    const filteredPokemons = () => {
      if (!text) {
        return deferredQuery;
      }
      return deferredQuery.filter((item) => (item.name.includes(text.toLowerCase())))
    }
    setPokemons(filteredPokemons)
  }, [text]);

  const firstGen = pokemons.slice(0, 151)
  const secondGen = pokemons.slice(151, 251)
  const threeGen = pokemons.slice(251, 386)

  console.log(text);

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
            firstGen.map((pokemon) => (
              <CardPokemon key={pokemon.name} name={pokemon.name} url={pokemon.url} />
            ))
          }
        </div>
      )}
      {activeIndex === 2 && (
        <div className="flex gap-2 flex-wrap justify-center">
          {
            secondGen.map((pokemon) => (
              <CardPokemon key={pokemon.name} name={pokemon.name} url={pokemon.url} />
            ))
          }
        </div>
      )}
      {activeIndex === 3 && (
        <div className="flex gap-2 flex-wrap justify-center">
          {
            threeGen.map((pokemon) => (
              <CardPokemon key={pokemon.name} name={pokemon.name} url={pokemon.url} />
            ))
          }
        </div>
      )}
    </>
  );
};

export default HomePage;
