import { useEffect, useState } from "react";

import CardPokemon from "~/components/molecules/card-pokemon/card-pokemon";
import MyTabs from "~/components/molecules/geration-pokemon/geration-pokemon";
import api from "~/services/api";
import { ListPokemons } from "~/types/pokemons";

const HomePage = () => {
  const [pokemons, setPokemons] = useState<ListPokemons[]>([]);
  const [text, setText] = useState('')
  const [query, setQuery] = useState<ListPokemons[]>([]);

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
    const filteredPokemons = ()=>{
      return pokemons.filter((item) => (item.name.includes(text)))
    }

    if(!text){
      setPokemons(query)
    }else{
      setPokemons(filteredPokemons)
    }
  }, [text]);

  return (
    <>
    <div className="flex flex-col justify-center items-center mb-4">
      <label htmlFor="">POKEAPI</label>
      <input className="text-black rounded-lg p-2" value={text} onChange={(e)=>setText(e.target.value)} type="text" placeholder="Digite seu pokemon" />
    </div>
    <MyTabs>
    <div className="flex gap-2 flex-wrap justify-center">
      {pokemons.slice(0, 151).map((pokemon) => (
        <CardPokemon key={pokemon.name} name={pokemon.name} url={pokemon.url} />
      ))}
    </div>
    <div className="flex gap-2 flex-wrap justify-center">
      {pokemons.slice(151, 251).map((pokemon) => (
        <CardPokemon key={pokemon.name} name={pokemon.name} url={pokemon.url} />
      ))}
    </div>
    <div className="flex gap-2 flex-wrap justify-center">
      {pokemons.slice(251, 386).map((pokemon) => (
        <CardPokemon key={pokemon.name} name={pokemon.name} url={pokemon.url} />
      ))}
    </div>
    </MyTabs>
 
    </>
  );
};

export default HomePage;
