import axios from "axios"
import Image from "next/image"
import { useCallback, useEffect, useState } from "react"
import { Pokemon } from "~/types/pokemons"

type CardPokemonProps = {
    url: string
    name: string
}

const CardPokemon = ({ url, name }: CardPokemonProps) => {
    const [pokemon, setPokemon] = useState<Pokemon>()

    const fetchPokemon = useCallback(async () => {
        const { status, data } = await axios.get<Pokemon>(url)

        if (status === 200) {
            setPokemon(data)
        }
    }, [url])

    useEffect(() => {
        fetchPokemon()
    }, [fetchPokemon])

    return (
        <div key={name} className="flex-1 card">
            {
                pokemon && (
                    <Image src={pokemon?.sprites?.front_default} width={100} height={100} alt={pokemon?.name} />
                )
            }
            <h2>{pokemon?.name}</h2>
        </div>
    )
}

export default CardPokemon