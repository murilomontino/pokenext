import { useEffect, useState } from 'react'

import CardPokemon from '~/components/molecules/card-pokemon/card-pokemon'
import api from '~/services/api'
import { ListPokemons } from '~/types/pokemons'

const HomePage = () => {
    const [pokemons, setPokemons] = useState<ListPokemons[]>([])

    const fetchPokemons = async () => {
        const { status, data } = await api.get('/pokemon?limit=10000')

        if (status === 200) {
            setPokemons(data.results)
        }
    }

    useEffect(() => {
        fetchPokemons()
    }, [])


    return (

        <div className="flex flex-cols gap-2 flex-wrap flex-grow">
            {
                pokemons.slice(0, 153).map((pokemon) => (
                    <CardPokemon key={pokemon.name} name={pokemon.name} url={pokemon.url} />
                ))
            }
        </div>

    )
}

export default HomePage