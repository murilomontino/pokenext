import { useEffect, useState } from "react";
import CardPokemon from "~/components/molecules/card-pokemon/card-pokemon";
import MyButtons from "~/components/molecules/geration-pokemon/geration-pokemon";
import api from "~/services/api";
import { ListPokemons } from "~/types/pokemons";


const HomePage = () => {
  const [pokemons, setPokemons] = useState<ListPokemons[]>([]);
  const [text, setText] = useState('')
  const [pokeDefault, setPokeDefault] = useState<ListPokemons[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [filteredPokemons, setFilteredPokemons] = useState<ListPokemons[]>([]);



  const fetchPokemons = async () => {
    const { status, data } = await api.get("/pokemon?limit=400");

    if (status === 200) {
      setPokemons(data.results);
      setPokeDefault(data.results)
    }
  };

  const firstGen = pokemons.slice(0, 151)
  const secondGen = pokemons.slice(151, 251)
  const secondGenSliced = secondGen.slice(0, 100);
  const threeGen = pokemons.slice(251, 386)
  const threeGenSliced = threeGen.slice(0, 135);

  useEffect(() => {
    fetchPokemons();
  }, []);

  console.log(text);

  useEffect(() => {
    const filtgen = () => {
      if (!text || text == '') {
        setPokeDefault(pokemons)
      } else {
        setPokeDefault(pokemons.filter((item) => (item.name.includes(text.toLowerCase()))))
      }
    }
    const filt1gen = () => {
      if (!text || text == undefined || text == null) {
        return firstGen;
      } else {
        return firstGen.filter((item) => (item.name.includes(text.toLowerCase())))
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
    if (activeIndex == 0) {
      filtgen()
    }
    if (activeIndex === 1) {
      setFilteredPokemons(filt1gen())
    } else if (activeIndex === 2) {
      setFilteredPokemons(filt2gen())
    }
    else if (activeIndex === 3) {
      setFilteredPokemons(filt3gen())
    }
  }, [text, activeIndex]);

  console.log(filteredPokemons);



  return (
    <>
      <div className="flex flex-col justify-center items-center mb-4">
        <label className="text-black" htmlFor="">POKE API</label>
        <input type="text" placeholder="Pesquise o Pokemon" className="input w-full max-w-xs" value={text} onChange={(e) => setText(e.target.value)} />
      </div>
      <MyButtons setActiveIndex={setActiveIndex} />
      {activeIndex === 0 && (
        <div className="py-4 rounded-lg bg-white flex gap-2 flex-wrap justify-center mt-4">
          {
            pokeDefault.map((pokemon) => (
              <CardPokemon key={pokemon.name} name={pokemon.name} url={pokemon.url} />
            ))
          }
        </div>
      )}
      {activeIndex === 1 && (
        <div className="py-4 rounded-lg bg-white flex gap-2 flex-wrap justify-center mt-4">
          {
            filteredPokemons.map((pokemon) => (
              <CardPokemon key={pokemon.name} name={pokemon.name} url={pokemon.url} />
            ))
          }
        </div>
      )}
      {activeIndex === 2 && (
        <div className="py-4 bg-white rounded-lg flex gap-2 flex-wrap justify-center mt-4">
          {
            filteredPokemons.map((pokemon) => (
              <CardPokemon key={pokemon.name} name={pokemon.name} url={pokemon.url} />
            ))
          }
        </div>
      )}
      {activeIndex === 3 && (
        <div className="py-4 bg-white rounded-lg flex gap-2 flex-wrap justify-center mt-4">
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
