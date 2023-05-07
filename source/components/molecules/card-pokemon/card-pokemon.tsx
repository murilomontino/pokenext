import Image from "next/image"
import Link from "next/link"
import useFetchPokemon from "~/hooks/use-fetch-pokemon"

type CardPokemonProps = {
    url: string
    name: string
}

const CardPokemon = ({ url, name }: CardPokemonProps) => {

    const { pokemon, isLoading } = useFetchPokemon(url)

    return (
        <Link href={`/${name}`}>
            <div key={name} className={`flex-1 2xl:w-60 card ${pokemon?.types[0].type.name}`}>
                <div className="flex gap-2">
                    {pokemon?.types?.map((pokemons) => (

                        <div className={`text-white ${pokemon?.types[0].type.name} my-1 mx-0 brightness-110 rounded-lg text-[10px] py-1 px-2`}>
                            <span key={pokemons?.type?.name}>{pokemons?.type?.name}</span>
                        </div>
                    ))
                    }
                </div>

                {
                    pokemon?.sprites?.other.home.front_default && (
                        <Image src={pokemon?.sprites?.other.home.front_default} width={100} height={100} alt={pokemon?.name} />
                    )
                }
                <h2 className="text-white">{pokemon?.name}</h2>
            </div>
        </Link>
    )
}

export default CardPokemon