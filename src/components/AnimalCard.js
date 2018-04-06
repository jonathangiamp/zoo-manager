import React, { Component } from 'react';

export default ({animal, count, addAnimal, removeAnimal}) => {
  const handleIncrement = () => addAnimal(animal);
  const handleDecrement = () => removeAnimal(animal);
  // French diet traduction
  const diet = animal.diet === 'carnivorous' ?
    'carnivore' :
    'herbivore';
  return (
    <div className="animal-container">
      <div className="animal-picker">
        <div className="animal-infos">
          <p className="name">{animal.name}</p>
          <p className="infos">{diet} - Taille {animal.weight}</p>
        </div>
        <div className="animal-select">
          <button className="controls" onClick={handleDecrement}>-</button>
          <p className="count">{count}</p>
          <button className="controls" onClick={handleIncrement}>+</button>
        </div>
      </div>
    </div>
  );
};