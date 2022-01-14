import Main from './components/Main'
import PersonCard from './components/PersonCard'

function App() {
  return (
    <div className="App">
      <Main 
      person1 = { new PersonCard("Jane", "Doe", 45, "Black") }
      person2 = { new PersonCard("John", "Smith", 88, "Brown") }
      person3 = { new PersonCard("Millard", "Fillmore", 50, "White") }
      person4 = { new PersonCard("Maria", "Smith", 62, "Red") } 
      />
    </div>
  );
}

export default App;
