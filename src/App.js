import React, { Component } from 'react';
import './css/App.css';
import animals from './data/animal';
import Parc from './class/Parc';
import HomePage from './components/HomePage';
import BoxesPage from './components/BoxesPage';

// Root statefull component
class App extends Component {
  constructor() {
    super();
    this.state = {
      boxSize: 0,
      animals: [],
      pickedAnimals: [],
      boxes: [],
    }
  }

  componentDidMount() {
    this.resetState();
  }

  resetState = () => {
    this.setState({
      boxSize: 10,
      animals: animals.map((elem, index) => Object.assign({}, elem, { id: index})),
      pickedAnimals: [],
      boxes: [],
    });
  }

  generateBoxes = () => {
    // Get selected animals
    const animals = this.state.pickedAnimals;
    if(animals.length === 0) return;
    const boxes = (new Parc())
      .initBoxSize(this.state.boxSize)
      .initAnimals(animals)
      .optimizeAnimals()
      .getBoxes();
    this.setState({
      boxes: [...boxes],
    })
  }

  updateBoxsize = (boxSize) => {
    this.setState({boxSize});
  }

  addAnimal = (animal) => {
    this.setState({
      pickedAnimals: [...this.state.pickedAnimals, Object.assign({}, animal)]
    });
  }

  removeAnimal = (animal) => {
    const copy = [...this.state.pickedAnimals];
    const index = copy.findIndex((element) => element.id === animal.id);
    if(index === -1) return;
    copy.splice(index, 1);
    this.setState({
      pickedAnimals: [...copy]
    });
  }

  render() {
    return (
      <main className="wrapper">
        <section className="section section--title">
          <h1 className="title">Zoo management</h1>
        </section>
        {
          this.state.boxes.length === 0 ?
            (
              <HomePage
                animals={this.state.animals}
                pickedAnimals={this.state.pickedAnimals}
                boxSize={this.state.boxSize}
                removeAnimal={this.removeAnimal}
                addAnimal={this.addAnimal}
                updateBoxsize={this.updateBoxsize}
                generateBoxes={this.generateBoxes}
                resetState={this.resetState}
              />
            ) :
            (
              <BoxesPage
                boxes={this.state.boxes}
                resetState={this.resetState}
              />
            )
        }
      </main>
    );
  }
}

export default App;
