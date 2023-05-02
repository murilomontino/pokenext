import Image from 'next/image'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import pokeball from '~/asserts/imgs/pokeball-hd.png'
 
const Header = () => {
    const [todo, setTodo] = useState(0)

    useEffect(() => {}, [])

    const a = 0


    return (
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
            
            <Link href="/" className="flex justify-center items-center ">
                <Image src={pokeball} width={50} height={50} alt='Logo Pokeball' className="ml-8" />
            
                <h2 className="text-base font-bold text-center text-white font-mono">
                    Pokemons
                </h2>
            </Link>
        </header>
    )
}

export default Header