import Image from "next/image"
import { Pokemon as IPokemon } from "~/types/pokemons"

type PokemonProps = {
    pokemon?: IPokemon
}

const Pokemon = ({ pokemon }: PokemonProps) => {
    return (
        <div>
            {
                pokemon && (
                    <Image src={pokemon?.sprites?.front_default} width={460} height={460} alt={pokemon?.name} />
                )
            }
            {pokemon?.name}
        </div>
    )
}

export default Pokemon