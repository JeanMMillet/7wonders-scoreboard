class Player {
  
  playerName:string;
  militaryPoints:number;
  coinPoints:number;
  wonderPoints:number;
  tradingPoints:number;
  culturePoints:number;
  sciencePoints:number;
  id;
  constructor(id:number) {
    
    this.playerName = "";
    this.militaryPoints = 0 ;
    this.coinPoints = 0;
    this.wonderPoints=0;
    this.tradingPoints = 0;
    this.culturePoints = 0;
    this.sciencePoints = 0;
    this.id = id;
  }
}

export default Player;
