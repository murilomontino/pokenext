import Image from "next/image"
import Link from "next/link"
import useFetchPokemon from "~/hooks/use-fetch-pokemon"

type CardPokemonProps = {
    url: string
    name: string
}

const CardPokemon = ({ url, name }: CardPokemonProps) => {

    const { pokemon, isLoading } = useFetchPokemon(url)
    if (isLoading) {
        return (
            <>

                <div className="bg-white p-2 sm:p-4 sm:h-64 rounded-2xl shadow-lg flex flex-col sm:flex-row gap-5 select-none ">
                    <div className="flex flex-col flex-1 gap-5 sm:p-2">
                        <div className="flex flex-1 flex-col gap-3">
                            <div className="bg-gray-200 w-full animate-pulse h-14 rounded-2xl" ></div>
                            <div className="bg-gray-200 w-full animate-pulse h-3 rounded-2xl" ></div>
                            <div className="bg-gray-200 w-full animate-pulse h-3 rounded-2xl" ></div>
                            <div className="bg-gray-200 w-full animate-pulse h-3 rounded-2xl" ></div>
                            <div className="bg-gray-200 w-full animate-pulse h-3 rounded-2xl" ></div>
                        </div>
                        <div className="mt-auto flex gap-3">
                            <div className="bg-gray-200 w-20 h-8 animate-pulse rounded-full" ></div>
                            <div className="bg-gray-200 w-20 h-8 animate-pulse rounded-full" ></div>
                            <div className="bg-gray-200 w-20 h-8 animate-pulse rounded-full ml-auto" ></div>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    return (

        <Link href={`/${name}`}>
            <div className={`flex-1 2xl:w-60 card ${pokemon?.types[0].type.name}`}>
                <div className="flex gap-2">
                    {pokemon?.types?.map((pokemons) => (

                        <div key={pokemons.type.name} className={`text-white ${pokemon?.types[0].type.name} my-1 mx-0 brightness-110 rounded-lg text-[10px] py-1 px-2`}>
                            <span >{pokemons?.type?.name}</span>
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