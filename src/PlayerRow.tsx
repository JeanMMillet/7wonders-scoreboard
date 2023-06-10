import { useState, useEffect } from "react";
import ScienceWindow from "./ScienceWindow";
import ButtonMinus from "./ButtonMinus";
import ButtonPlus from "./ButtonPlus";

export default function PlayerRow({
  player,
  setIsBabyloneBuilt,
  IsBabyloneBuilt,
  hasScienceGuild,
  setHasScienceGuild,
  updatePlayer,
}) {
  const [visible, setVisible] = useState(false);

  function handleScienceClick() {
    setVisible(true);
  }

  return (
    <>
      <div className="playerRow">
        <div>
          <input
            type="text"
            className="playerName"
            name="playerName"
            placeholder="Nom du joueur"
            onChange={(e) => {
              updatePlayer({ field: e.target.name, value: e.target.value });
            }}
          />
        </div>

        <div className="militaryPoints">
          <ButtonMinus setTest={updatePlayer} />
          <input
            type="number"
            className="militaryPoints"
            name="militaryPoints"
            value={player.militaryPoints}
            min={-6}
            max={18}
          />
          <ButtonPlus setTest={updatePlayer} />
        </div>

        <div className="coinPoints">
          <ButtonMinus setTest={updatePlayer} />
          <input
            type="number"
            className="coinPoints"
            name="coinPoints"
            value={player.coinPoints}
            // onChange={(e) => setTest({...test, [e.target.name]: +e.target.value})}
            min={0}
          />
          <ButtonPlus setTest={updatePlayer} />
        </div>

        <div className="wonderPoints">
          <ButtonMinus setTest={updatePlayer} />
          <input
            type="number"
            className="wonderPoints"
            name="wonderPoints"
            value={player.wonderPoints}
            // onChange={(e) => setTest({...test, [e.target.name]: +e.target.value})}
            min={0}
          />
          <ButtonPlus setTest={updatePlayer} />
        </div>

        <div className="culturePoints">
          <ButtonMinus setTest={updatePlayer} />
          <input
            type="number"
            className="culturePoints"
            name="culturePoints"
            value={player.culturePoints}
            // onChange={(e) => setTest({...test, [e.target.name]: +e.target.value})}
            min={0}
          />
          <ButtonPlus setTest={updatePlayer} />
        </div>

        <div className="tradingPoints">
          <ButtonMinus setTest={updatePlayer} />
          <input
            type="number"
            className="tradingPoints"
            name="tradingPoints"
            value={player.tradingPoints}
            // onChange={(e) => setTest({...test, [e.target.name]: +e.target.value})}
            min={0}
          />
          <ButtonPlus setTest={updatePlayer} />
        </div>

        <div className="input guildPoints">
          <ButtonMinus setTest={updatePlayer} />
          <input
            type="number"
            className="guildPoints"
            name="guildPoints"
            value={player.guildPoints}
            // onChange={(e) => setTest({...test, [e.target.name]: +e.target.value})}
            min={0}
          />
          <ButtonPlus setTest={updatePlayer} />
        </div>

        <div className="sciencePoints">
          <input
            type="number"
            className="sciencePoints"
            onClick={() => handleScienceClick()}
            readOnly
            min={0}
            value={player.sciencePoints}
          />
        </div>

        <div>
          <input
            type="number"
            className="score"
            readOnly={true}
            value={
              player.tradingPoints +
              player.culturePoints +
              player.wonderPoints +
              player.coinPoints +
              player.militaryPoints +
              player.sciencePoints +
              player.guildPoints
            }
          />
        </div>
      </div>
      <div>
        {visible && (
          <ScienceWindow
            player={player}
            test={player}
            updatePlayer={updatePlayer}
            setVisible={setVisible}
            setIsBabyloneBuilt={setIsBabyloneBuilt}
            IsBabyloneBuilt={IsBabyloneBuilt}
            hasScienceGuild={hasScienceGuild}
            setHasScienceGuild={setHasScienceGuild}
          />
        )}
      </div>
    </>
  );
}
