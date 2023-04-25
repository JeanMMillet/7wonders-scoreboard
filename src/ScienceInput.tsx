

export default function ScienceInput({cardNumber, setCardNumber, cardName }) {

  return (<div className="sciencePointsRange">
          <label htmlFor={cardName}>Nombre de carte</label>
          <img src={`src\\assets\\${cardName}.png`} alt={cardName}></img>
          <output htmlFor={cardName} >{cardNumber}</output>
          <input
            type="range"
            name= {cardName}
            id=""
            defaultValue={0}
            value={cardNumber}
            onChange={(e) => setCardNumber(+e.target.value)}
            min={0}
            max={4}
          />
        </div>
  )
}