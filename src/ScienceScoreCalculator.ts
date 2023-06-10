

export default function scienceScoreCalculation (tablet:number, wheel:number, compass:number, wonderBonus:boolean,guildBonus:boolean ) {
      
      let scienceCards = [tablet, wheel, compass];
      scienceCards = scienceCards.sort()

      if (wonderBonus && guildBonus) {
            if (scienceCards[0] === scienceCards[1] -1 && scienceCards[0] === scienceCards[2] - 2) {
                  ++scienceCards[0];
                  ++scienceCards[2];
            }
            else if (scienceCards[0] === scienceCards[1] && scienceCards[0] === scienceCards[2] - 1) {
                  ++scienceCards[0];
                  ++scienceCards[1];
            }
            else if ((scienceCards[0] === 0 && scienceCards[2] === 4) || scienceCards[2] - scienceCards[1] >=2) {
                  scienceCards[2] += 2;
            }
            else {
                  scienceCards[0] += 2
            }
      }
      else if (wonderBonus || guildBonus)  {
            if (scienceCards[0] == scienceCards[1] || scienceCards[2] ===4) {
                  scienceCards[2] += 1
            }
            else {
                  scienceCards[0] += 1
            }
      }
      scienceCards = scienceCards.sort()
      let bonusScore = 7*scienceCards[0];

      return scienceCards[0] **2 +scienceCards[1] **2 + scienceCards[2] **2 + bonusScore

}