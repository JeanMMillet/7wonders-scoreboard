
import Player from "./Player";

export default function AddPlayer({setPlayers, players}) {
  return (
    <button
        onClick={() => setPlayers([...players, new Player(players.length + 1)])}
        disabled={players.length < 7 ? false : true}
      >
        Ajouter un joueur
      </button>
  )
}