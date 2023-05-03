import Image from "next/image";
import { Pokemon as IPokemon } from "~/types/pokemons";

type PokemonProps = {
  pokemon?: IPokemon;
};


const Pokemon = ({ pokemon }: PokemonProps) => {
  
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        {pokemon && (
          <Image
            src={pokemon?.sprites?.front_default}
            width={460}
            height={460}
            alt={pokemon?.name}
          />
        )}
        {pokemon?.name}
      </div>
      <div className="flex flex-cols gap-2 flex-wrap flex-grow">
      <div> 
        {pokemon?.types.map((pokemons) =>(
          <h1 key={pokemons.type.name}> Tipo do Pokemon: {pokemons.type.name}</h1>
        ))
        }
        <h1> Base Experience : {pokemon?.base_experience}</h1>
        <div>
        {
          pokemon?.abilities.map((hability) =>(
            <h1 key={hability.ability.name}> Habilidades: {hability.ability.name}</h1>
          ))
        }
        </div>
      </div>
      
    </div>
    </>
  );
};

export default Pokemon;
