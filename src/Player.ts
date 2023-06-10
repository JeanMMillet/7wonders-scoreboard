class Player {
  playerName = "";
  militaryPoints: number;
  coinPoints: number;
  wonderPoints: number;
  tradingPoints: number;
  culturePoints: number;
  guildPoints: number;
  sciencePoints: number;
  scienceCards: object;
  score: number;
  id;
  constructor(id: number) {
    // this.playerName = "";
    this.militaryPoints = 0;
    this.coinPoints = 0;
    this.wonderPoints = 0;
    this.tradingPoints = 0;
    this.culturePoints = 0;
    this.guildPoints = 0;
    this.sciencePoints = 0;
    this.scienceCards = {
      tablet: 0,
      wheel: 0,
      compass: 0,
      wonderBonus: false,
      guildBonus: false,
    };
    this.score = 0;
    this.id = id;
  }
}

export default Player;

export const createPlayer = (id: number) => {
  return {
    playerName: "",
    militaryPoints: 0,
    coinPoints: 0,
    wonderPoints: 0,
    tradingPoints: 0,
    culturePoints: 0,
    guildPoints: 0,
    sciencePoints: 0,
    scienceCards: {
      tablet: 0,
      wheel: 0,
      compass: 0,
      wonderBonus: false,
      guildBonus: false,
    },
    score: 0,
    id: id,
  };
};
