
import './App.css';
import Die from "./die";

function App() {
  function allNewDice() {
    const newDice = []
    for (let i = 0; i < 10; i++) {
        newDice.push(Math.ceil(Math.random() * 6))
    }
    return newDice
}
console.log(allNewDice())

  
  return (
   <main>
    <div className ="dice-container">
   
      <Die value = "1"/>
      <Die value = "1"/>
      <Die value = "1"/>
      <Die value = "1"/>
      <Die value = "1"/>
      <Die value = "1"/>
      <Die value = "1"/>
      <Die value = "1"/>
      <Die value = "1"/>
      <Die value = "1"/>
      
      </div>
   </main>
   
  );
}

export default App;
