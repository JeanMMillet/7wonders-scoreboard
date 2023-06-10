import { useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import PlayerRow from "./PlayerRow";
import Player, { createPlayer } from "./Player";
import AddPlayer from "./AddPlayer";
import RemovePlayer from "./RemovePlayer";

function App() {
  const initialPlayers = [new Player(1), new Player(2), new Player(3)];

  const testPlayer = createPlayer(4);

  const clonePlayer = {
    ...testPlayer,
    scienceCard: { ...testPlayer.scienceCards },
  };
  const [players, setPlayers] = useState(initialPlayers);
  const [isBabyloneBuilt, setIsBabyloneBuilt] = useState(false);
  const [hasScienceGuild, setHasScienceGuild] = useState(false);

  const columns = [
    "Player Name",
    "Military",
    "Coins",
    "Wonder",
    "Culture",
    "Trading",
    "Guild",
    "Science",
    "Score",
  ];

  const updatePlayer = (obj: { field: string; value: string }, idx) => {
    setPlayers((prevState) => {
      // on recpere le bon joueur
      let updatedPlayer = prevState[idx];
      // modifie le bon champs
      updatedPlayer = { ...updatedPlayer, [obj.field]: obj.value };
      console.log("field", obj.field, updatedPlayer);

      // inject l updated player dans le tableau de player
      let newPlayers = [...players];
      newPlayers[idx] = updatedPlayer;

      return newPlayers;
    });
  };

  const HOFupdatePlayer = (idx: number) => {
    return function updatePlayer2(obj: { field: string; value: string }) {
      setPlayers((prevState) => {
        // on recpere le bon joueur
        let updatedPlayer = prevState[idx];
        // modifie le bon champs
        updatedPlayer = { ...updatedPlayer, [obj.field]: obj.value };
        console.log("field", obj.field, updatedPlayer);

        // inject l updated player dans le tableau de player
        let newPlayers = [...players];
        newPlayers[idx] = updatedPlayer;

        return newPlayers;
      });
    };
  };

  function handleClickWinner() {
    // Compare the score of each player and return the winner name and his/her score
    // Create a new array for comparison to avoid rerender of PlayerRow
    let sortPlayers: any = [];
    players.map((e) => sortPlayers.push(e));
    sortPlayers.sort((a, b) => b.score - a.score);
    console.log(sortPlayers, players);
    alert(
      `Vainqueur ${sortPlayers[0].playerName} avec ${sortPlayers[0].score} points`
    );
  }

  return (
    <div className="App">
      <h1>7WONDERS SCOREBOARD</h1>
      <div className="header">
        {columns.map((e) => {
          return <div className="columnTitle">{e}</div>;
        })}
      </div>

      {players.map((player, index) => (
        <PlayerRow
          key={player.id}
          player={player}
          IsBabyloneBuilt={isBabyloneBuilt}
          setIsBabyloneBuilt={setIsBabyloneBuilt}
          hasScienceGuild={hasScienceGuild}
          setHasScienceGuild={setHasScienceGuild}
          updatePlayer={HOFupdatePlayer(index)}
        />
      ))}

      <div className="buttons">
        <AddPlayer setPlayers={setPlayers} players={players} />
        <RemovePlayer setPlayers={setPlayers} players={players} />
        <button onClick={() => handleClickWinner()}>Vainqueur ?</button>
      </div>
    </div>
  );
}

export default App;