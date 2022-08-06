
import React from 'react';
import './App.css';
import Die from "./die";
import {nanoid} from "nanoid"

function App() {

  const[dice,setDice] = React.useState(allNewDice())
  const [tenizes, setTenzies] = React.useState(false)
    
  React.useEffect(() => {
      const allHeld = dice.every(die => die.isHeld)
      const firstValue = dice[0].value
      const allSameValue = dice.every(die => die.value === firstValue)
      if (allHeld && allSameValue) {
          setTenzies(true)
          console.log("You won!")
      }
  }, [dice])
function generateNewDie(){
  return {
   value: Math.ceil(Math.random() * 6), 
  isHeld: false,
  id: nanoid()
}
}
  function allNewDice() {
    const newDice = []
    for (let i = 0; i < 10; i++) {
      newDice.push( generateNewDie())
    }
    return newDice
}

function holdDice(id) {
  setDice(oldDice => oldDice.map(die => {
    return die.id === id ? 
        {...die, isHeld: !die.isHeld} :
        die
}))
}
const diceElements = dice.map(die => (
  <Die key={die.id} value={die.value} isHeld={die.isHeld} holdDice={() => holdDice(die.id)} />
))


function rollDice() {
  if(tenizes) {
    setTenzies(false)
    setDice(allNewDice())
  } else {
      
      setDice(oldDice => oldDice.map(die => {
        return die.isHeld ? 
            die :
            generateNewDie()
    }))
  }
}
  
  return (
   <main>
    
     <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. <br/>click each die to freeze it at its current value between rolls.</p>
    <div className ="dice-container">
    
      {diceElements}
      </div>
      <button class = "btn" onClick={rollDice}>{tenizes ? "New Game" : "Roll"}</button>
   </main>
   
  );
}

export default App;
