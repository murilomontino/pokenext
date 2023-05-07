
type buttonPokemons = {
  setActiveIndex: (index: number) => void
}

export default function MyButtons({ setActiveIndex }: buttonPokemons) {

  return (
    <div className="btn-group gap-1 flex justify-center">
      <button className="btn" onClick={() => setActiveIndex(1)} >1° Gen</button>
      <button className="btn" onClick={() => setActiveIndex(2)}>2° Gen</button>
      <button className="btn" onClick={() => setActiveIndex(3)} >3° Gen</button>
    </div>
  )
}
