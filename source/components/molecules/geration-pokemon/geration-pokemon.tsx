
type buttonPokemons = {
  setActiveIndex: (index: number) => void
}

export default function MyButtons({ setActiveIndex }: buttonPokemons) {

  return (
    // <div className="mb-4 flex gap-2">
    //   <button className={"bg-blue-900/20 p-2 rounded-lg"} onClick={() => setActiveIndex(1)}>Primeira Geração</button>
    //   <button className={"bg-blue-900/20 p-2 rounded-lg"} onClick={() => setActiveIndex(2)}>Segunda Geração</button>
    //   <button className={"bg-blue-900/20 p-2 rounded-lg"} onClick={() => setActiveIndex(3)}>Terceira Geração</button>
    <div className="btn-group gap-1 flex justify-center">
      <button className="btn" onClick={() => setActiveIndex(1)} >1° Gen</button>
      <button className="btn" onClick={() => setActiveIndex(2)}>2° Gen</button>
      <button className="btn" onClick={() => setActiveIndex(3)} >3° Gen</button>
    </div>
    // </div>
  )
}
