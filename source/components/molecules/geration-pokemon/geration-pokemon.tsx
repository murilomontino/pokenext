
type buttonPokemons = {
  setActiveIndex: (index: number) => void
}

export default function MyButtons({ setActiveIndex }: buttonPokemons) {

  return (
    // <div className="mb-4 flex gap-2">
    //   <button className={"bg-blue-900/20 p-2 rounded-lg"} onClick={() => setActiveIndex(1)}>Primeira Geração</button>
    //   <button className={"bg-blue-900/20 p-2 rounded-lg"} onClick={() => setActiveIndex(2)}>Segunda Geração</button>
    //   <button className={"bg-blue-900/20 p-2 rounded-lg"} onClick={() => setActiveIndex(3)}>Terceira Geração</button>
    <div className="btn-group">
      <button className="`${btn btn-active}`" onClick={() => setActiveIndex(1)} >Button</button>
      <button className="btn" onClick={() => setActiveIndex(2)}>Button</button>
      <button className="btn" onClick={() => setActiveIndex(3)} >Button</button>
    </div>
    // </div>
  )
}
