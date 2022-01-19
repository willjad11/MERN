import {useState} from 'react';
import axios from 'axios';

function App() {
  const [pokemon, addPokemon] = useState("")

  const fetchPokemon = () => {
    axios.get('https://pokeapi.co/api/v2/pokemon')
      .then(response => { addPokemon(response.data) })
  }

  const listPokemon = pokemon && Object.keys(pokemon.results).map(function (i) {
    return (
      <div>
        <p key={i}>Name: {pokemon.results[i]['name']}</p>
      </div>
    )
  });

  return (
    <div className="App">
      <button type="button" onClick={fetchPokemon}>Fetch!</button>
      {pokemon && listPokemon}
    </div>
  );
}

export default App;
