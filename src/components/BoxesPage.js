import React, { component } from 'react';

export default ({ boxes, resetState }) => {
  const handleClick = () => resetState();
  return (
    <div className="section">
      {
        boxes
          .sort((a, b) => a.getSize() < b.getSize())
          .map((box, index) => {
            return (
              <section className="section section--box" key={index}>
                <div className="container container-box">
                  <h2 className="box-title">
                    Box {index + 1}
                    <span className="box-size">Taille {box.getSize()} / {box.getLimit()}</span>
                  </h2>
                  {
                    box.getAnimals().map(animal => {
                      return (
                        <div className="animal-container" key={animal.id}>
                          <div className="animal">
                            <div className="animal-infos">
                              <p className="name">{animal.name}</p>
                              <p className="infos">{animal.diet} - Taille {animal.weight}</p>
                            </div>
                          </div>
                        </div>
                      );
                    })
                  }
                </div>
              </section>
            );
          })
      }
      <section className="section">
        <div className="button-container">
          <button className="button button-reset" onClick={handleClick}>Reinitialiser</button>
        </div>
      </section>
    </div>
  );
};