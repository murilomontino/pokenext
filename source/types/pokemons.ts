
export type ListPokemons = {
    name: string
    url: string
}

export type ApiGetPokemon = {
    count: number
    results: Array<ListPokemons>
}

export type Pokemon = {
    id: number
    name: string
    base_experience: number
    height: number
    weight: number
    abilities: Array<any>
    types: Array<any>
    sprites: {
        back_default: string
        back_shiny: string
        front_default: string
        front_shiny: string
        other: {
            dream_world: {
                front_default: string
            },
            home: {
                front_default: string
                front_shiny: string
            }
        }
    }
}