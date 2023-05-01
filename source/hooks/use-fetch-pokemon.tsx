import axios from 'axios'
import { useCallback, useEffect, useState } from 'react'
import { Pokemon } from '~/types/pokemons'

type UseFetchPokemonResponse = {
    isLoading: boolean
    pokemon?: Pokemon
    error?: string
}

const useFetchPokemon = (url: string): UseFetchPokemonResponse => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [pokemon, setPokemon] = useState<Pokemon>()
    const [error, setError] = useState<string>()

    const fetchPokemon = useCallback(async () => {
        setIsLoading(true)
        try {
            const { status, data } = await axios.get<Pokemon>(url)
            if (status === 200) {
                setPokemon(data)
            }
        }
        catch (error) {
            console.log(error)
            setError('Erro na Request de Pokemon')
        }
        finally {
            setIsLoading(false)
        }

    }, [url])

    useEffect(() => {
        fetchPokemon()
    }, [fetchPokemon])

    return {
        isLoading,
        pokemon,
        error
    }
}

export default useFetchPokemon