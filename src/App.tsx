import { useEffect, useState } from "react"
import "./App.css"
import { GameState } from "./logic.ts"
import { Players } from "rune-games-sdk/multiplayer"

function App() {
  const [game, setGame] = useState<GameState>()
  const [myPlayerId, setMyPlayerId] = useState("")
  const [players, setPlayers] = useState<Players>({})

  useEffect(() => {
    Rune.initClient({
      onChange: ({ action, game, yourPlayerId, players }) => {

        setGame(game)
        setPlayers(players)

        if (yourPlayerId) {
          setMyPlayerId(yourPlayerId)
        }
      }
    })
  }, [])

  if (!game) {
    return <div>Loading...</div>
  }

  return (
    <>
      <h1>Pacrazi</h1>
      <h2>Choose your color</h2>
    </>
  )
}

export default App
