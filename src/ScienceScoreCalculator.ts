

export default function scienceScoreCalculation (tablet:number, wheel:number, compass:number, bonus:boolean) {
      
      let scienceCards = [tablet, wheel, compass];
      scienceCards = scienceCards.sort()
      if (bonus)  {
            if (scienceCards[0] == scienceCards[1] || scienceCards[2] ===4) {
                  scienceCards[2] += 1
            }
            else {
                  scienceCards[0] += 1
            }
      }

      let bonusScore = 7*scienceCards[0];

      return scienceCards[0] **2 +scienceCards[1] **2+scienceCards[2] **2 + bonusScore

}