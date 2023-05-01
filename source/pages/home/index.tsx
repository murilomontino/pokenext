import { Inter } from 'next/font/google'
import Image from 'next/image'
import { useEffect, useState } from 'react'

import pokeball from '~/asserts/imgs/pokeball-hd.png'
import CardPokemon from '~/components/molecules/card-pokemon/card-pokemon'
import api from '~/services/api'
import { ListPokemons } from '~/types/pokemons'

const inter = Inter({ subsets: ['latin'] })

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
        <>
            <header
                className="
                flex 
                flex-row 
                items-center 
                p-2 text-center 
                shadow-2xl
                gap-2
            "
            >
                <Image src={pokeball} width={50} height={50} alt='Logo Pokeball' className="ml-8" />

                <h2 className="text-base font-bold text-center text-white font-mono">
                    PokeNext Estácio!
                </h2>
            </header>
            <main
                className={`flex flex-col items-center justify-between p-24 ${inter.className}`}
            >
                <div className="flex flex-cols gap-2 flex-wrap flex-grow">
                    {
                        pokemons.slice(0, 153).map((pokemon) => (
                            <CardPokemon key={pokemon.name} name={pokemon.name} url={pokemon.url} />
                        ))
                    }
                </div>
            </main>
        </>
    )
}

export default HomePage