import Image from "next/image"
import { Pokemon as IPokemon } from "~/types/pokemons"

type PokemonProps = {
    pokemon?: IPokemon
}

const Pokemon = ({ pokemon }: PokemonProps) => {
    console.log(pokemon)

    return (
        <div>
            {
                pokemon && (
                    <Image src={pokemon?.sprites?.front_default} width={460} height={460} alt={pokemon?.name} />
                )
            }
            {
                pokemon && (
                    <Image src={pokemon?.sprites?.back_default} width={460} height={460} alt={pokemon?.name} />
                )
            }
            {pokemon?.name}
            {pokemon?.types?.map(
                (type, index) => (
                <h1
                    className="bg-black m-1"
                    key={index}>
                        {type.type.name}
                        </h1>)
            )
            }
        </div>
    )
}

export default Pokemon