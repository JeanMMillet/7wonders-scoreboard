

export default function RemovePlayer ({players, setPlayers}) {
  return (
    <button
        onClick={() => setPlayers(players.slice(0, players.length - 1))}
        disabled={players.length > 3 ? false : true}
      >
        Supprimer un joueur
      </button>
  )
}