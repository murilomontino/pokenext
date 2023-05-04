
type buttonPokemons = {
  setActiveIndex: (index: number) => void
}

export default function MyButtons({ setActiveIndex }: buttonPokemons) {

  return (
    <div>
      <button className={"bg-blue-900/20 p-1 rounded-lg"} onClick={() => setActiveIndex(1)}>Primeira Geração</button>
      <button className={"bg-blue-900/20 p-1 rounded-lg"} onClick={() => setActiveIndex(2)}>Segunda Geração</button>
      <button className={"bg-blue-900/20 p-1 rounded-lg"} onClick={() => setActiveIndex(3)}>Terceira Geração</button>
    </div>
  )
}
