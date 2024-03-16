import React from 'react';

function Pokemon({ pokemon, language}) {    
  const { id, name = {}, type = [], base = {}, image } = pokemon;
  const { HP, Attack, Defense, 'Sp. Atk': spAttack, 'Sp. Def': spDefense, Speed } = base;

  let pokemonName;

  if (language === 'english') {
    pokemonName = name.english;
  } else if (language === 'japanese') {
    pokemonName = name.japanese;
  } else if (language === 'chinese') {
    pokemonName = name.chinese;
  } else if (language === 'french') {
    pokemonName = name.french;
  } else {
    pokemonName = name.english;
  }
  

  return (
    <div className="pokemon-card">
      <img src={image} className="pokemon-image"/>
      <div className="pokemon-info">
        <p>[{id}] <h3>{pokemonName}</h3></p>
  
        <p>Type: {type.join(', ')}</p>
        <p>HP: {base.HP} Speed: {base.Speed}</p>
        <p>Atk: {base.Attack} Sp. Atk: {base['Sp. Attack']} </p>
        <p>Def: {base.Defense} Sp. Def: {base['Sp. Defense']}</p>
  
      </div>
    </div>
  );
  
}

export default Pokemon;
