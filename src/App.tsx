import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PlayerRow from './PlayerRow'
import Player from './Player'
import AddPlayer from './AddPlayer'
import RemovePlayer from './RemovePlayer'

function App() {


const initialPlayers = [new Player(1),new Player(2), new Player(3)]

const [players, setPlayers] = useState(initialPlayers);
const [isBabyloneBuilt,setIsBabyloneBuilt] = useState(false) 

function handleClickWinner() {
  // Compare the score of each player and return the winner name and his/her score
  // Create a new array for comparison to avoid rerender of PlayerRow
  let sortPlayers:any= [];
  players.map((e) => sortPlayers.push(e));
  sortPlayers.sort((a:object, b:object) => b.score - a.score);
  console.log(sortPlayers, players);
  console.log(
    `Vainqueur ${sortPlayers[0].playerName} avec ${sortPlayers[0].score} points`
  );
}

  return (
    <div className="App">
      <h1>7WONDERS SCOREBOARD</h1>
      <div className='pointsRow'>
        
      </div>
      <div>
         { players.map((e,index) => <PlayerRow key={e.id} 
          player={e} 
          players={players} 
          setPlayers={setPlayers} 
          index={index}
          IsBabyloneBuilt={isBabyloneBuilt}
          setIsBabyloneBuilt={setIsBabyloneBuilt} 
          />)
          }
      </div>
      <div className='buttons'>
        <AddPlayer setPlayers={setPlayers} players={players}/>      
        <RemovePlayer setPlayers={setPlayers} players={players}/>
        <button onClick={() => handleClickWinner()}>Vainqueur ?</button>
      </div>
      
      
    </div>
  )
}

export default App
