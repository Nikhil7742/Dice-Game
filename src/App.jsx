
import React, { useState } from "react"
import Play from "./components/HomePage/Play"
import Game from "./components/GamePage/Game"
function App() {
  const [game, setGame] = useState(false);
  const toogleGame = () => {
    setGame((prev) => !prev)
  }


  return (
    <>
    {
      game ? <Game /> :<Play toogle={toogleGame}/>
    }
    </>
  )
}

export default App
