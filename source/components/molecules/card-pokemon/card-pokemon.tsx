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
            <div key={name} className="flex-1 card">
                {
                    pokemon && (
                        <Image src={pokemon?.sprites?.front_default} width={100} height={100} alt={pokemon?.name} />
                    )
                }
                <h2>{pokemon?.name}</h2>
            </div>
        </Link>
    )
}

export default CardPokemon