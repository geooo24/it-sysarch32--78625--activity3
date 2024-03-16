import React, { useState } from 'react';
import Pokemon from './Pokemon';

function Pokedex({ pokemons }) {
  const [language, setLanguage] = useState('english');

  const handleLanguageChange = (selectedLanguage) => {
    setLanguage(selectedLanguage);
  };

  return (
    <div className='buttonGroup'>    
      <div className="language-buttons">
        <button onClick={() => handleLanguageChange('english')}></button> 
        <button onClick={() => handleLanguageChange('japanese')}></button>
        <button onClick={() => handleLanguageChange('chinese')}></button>
        <button onClick={() => handleLanguageChange('french')}></button>
      </div>
      {pokemons.map((pokemon) => (
        <Pokemon key={pokemon.id} pokemon={pokemon} language={language} />
      ))}
    </div>
  );
}

export default Pokedex;
