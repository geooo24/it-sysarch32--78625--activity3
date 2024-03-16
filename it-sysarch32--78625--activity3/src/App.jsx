import React, { useState, useEffect } from 'react';
import Header from './Header'
import Pokedex from './Pokedex';
import './App.css'

function App() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://us-central1-it-sysarch32.cloudfunctions.net/pokemon');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setPokemons(data); // Set pokemons state directly with the fetched data
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="app">
      <Header />
      <Pokedex pokemons={pokemons} />
    </div>
  );
}

export default App;
