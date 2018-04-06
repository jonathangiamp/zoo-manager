import React, { component } from 'react';
import AnimalCard from './AnimalCard';

export default (props) => {
  const {
    animals,
    pickedAnimals,
    boxSize,
    removeAnimal,
    addAnimal,
    updateBoxsize,
    generateBoxes,
    resetState
  } = props;
  const handleChange = (event) => updateBoxsize(event.target.value);
  return (
    <div className="section">
      <section className="section section--picker">
        <div className="container container-picker">
          <h2 className="container-title">Choisissez vos animaux</h2>
          {
            animals
              .sort((a, b) => a.name > b.name)
              .map(animal => {
                return (
                  <AnimalCard
                    animal={animal}
                    count={pickedAnimals.filter((elem) => elem.id === animal.id).length}
                    key={animal.id}
                    addAnimal={addAnimal}
                    removeAnimal={removeAnimal}
                  />
                )
              })
          }
        </div>
      </section>

      <section className="section section--options">
        <div className="container">
          <h2 className="container-title">Options</h2>
          <label htmlFor="box-size">Quelle est la taille des cages ?</label>
          <div className="range-slider">
            <input className="range-slider__range" type="range"
              value={boxSize} min="8" max="20" step="1" name="box-size"
              onChange={handleChange}
            />
            <span className="range-slider__value">{boxSize}</span>
          </div>
        </div>
      </section>

      <section className="section section--confirm">
        <div className="button-container">
          <button className="button button-reset" onClick={resetState}>Reinitialiser</button>
          <button className="button button-send" onClick={generateBoxes}>Générer les cages</button>
        </div>
      </section>
    </div>
  );
}