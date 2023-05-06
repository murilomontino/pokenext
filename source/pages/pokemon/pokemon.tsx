import Image from "next/image";
import { Pokemon as IPokemon } from "~/types/pokemons";

type PokemonProps = {
  pokemon?: IPokemon;
};


const Pokemon = ({ pokemon }: PokemonProps) => {

  return (
    <>
      <div className={`rounded-xl flex flex-col justify-center items-center ${pokemon?.types[0].type.name}`}>
        <div className="flex flex-col justify-center items-center">
          <h1 className="justify-start mt-4 text-xl">{pokemon?.name}</h1>
          {pokemon?.types?.map((pokemons) => (

            <div className={`text-white ${pokemon?.types[0].type.name} my-1 mx-0 brightness-110 rounded-lg text-[10px] py-1 px-2`}>
              <span key={pokemons?.type?.name}>{pokemons?.type?.name}</span>
            </div>
          ))
          }
          {pokemon && (
            <Image
              className="p-10"
              src={pokemon?.sprites?.other.dream_world.front_default ?? ""}
              width={240}
              height={450}
              alt={pokemon?.name}
            />
          )}

        </div>
        <div className="flex flex-cols gap-2 flex-wrap flex-grow p-4 bg-white w-full text-black">
          <div>
            <h1> Base Experience : {pokemon?.base_experience}</h1>
            <div>
              {
                pokemon?.abilities?.map((hability) => (
                  <h1 key={hability?.ability?.name}> Habilidades: {hability?.ability?.name}</h1>
                ))
              }
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Pokemon;
