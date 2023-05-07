import { useState } from "react"

type buttonPokemons = {
  setActiveIndex: (index: number) => void
}

export default function MyButtons({ setActiveIndex }: buttonPokemons) {

  const [colorButton, setColorButton] = useState(1)

  const handleButton = (index: number) => {
    setColorButton(index)
    setActiveIndex(index)
  }


  return (
    <div className="btn-group gap-1 flex justify-center">
      <button className={`btn ${colorButton === 1 ? "btn-active" : ""}`} onClick={() => handleButton(1)} >1° Gen</button>
      <button className={`btn ${colorButton === 2 ? "btn-active" : ""}`} onClick={() => handleButton(2)}>2° Gen</button>
      <button className={`btn ${colorButton === 3 ? "btn-active" : ""}`} onClick={() => handleButton(3)} >3° Gen</button>
    </div>
  )
}
