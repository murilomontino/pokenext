import { usePathname } from 'next/navigation'
import useFetchPokemon from '~/hooks/use-fetch-pokemon'
import PokePage from '~/pages/pokemon'
import { baseURL } from '~/services/api'


export default function Pokemon() {
    const pathname = usePathname()
    const url = baseURL + '/pokemon' + pathname
    const murilo = 2;

    const { pokemon, isLoading } = useFetchPokemon(url)


    return (
        <PokePage pokemon={pokemon} />
    )
}
