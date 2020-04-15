import React, { Component, Fragment } from 'react';
import './App.css';
import Membre from './components/Membre'
import Button from './components/Button'


const fraterie = {
  membre1: {
    nom: 'Thomas',
    age: 32
  },
  membre2: {
    nom: 'Gaétan',
    age: 28
  },
  membre3: {
    nom: 'Bastien',
    age: 24
  },
  membre4: {
    nom: 'Yan',
    age: 22
  }
}

class App extends Component {
  state = {
    fraterie
  }

  handleClick = (num) => {
    // => console.log('Click')
    const fraterie = {...this.state.fraterie}
    fraterie.membre1.age += num
    this.setState ({fraterie})
  }

  handleChangeNomT = event => {
    const fraterie = {...this.state.fraterie}
    const nom = event.target.value
    fraterie.membre1.nom = nom
    this.setState ({fraterie})
  }

  handleChangeAgeT = event => {
    const fraterie = {...this.state.fraterie}
    const age = event.target.value
    fraterie.membre1.age = age
    this.setState ({fraterie})
  }

  handleChangeNomG = event => {
    const fraterie = {...this.state.fraterie}
    const nom = event.target.value
    fraterie.membre2.nom = nom
    this.setState ({fraterie})
  }

  handleChangeAgeG = event => {
    const fraterie = {...this.state.fraterie}
    const age = event.target.value
    fraterie.membre2.age = age
    this.setState ({fraterie})
  }

  handleChangeNomB = event => {
    const fraterie = {...this.state.fraterie}
    const nom = event.target.value
    fraterie.membre3.nom = nom
    this.setState ({fraterie})
  }

  handleChangeAgeB = event => {
    const fraterie = {...this.state.fraterie}
    const age = event.target.value
    fraterie.membre3.age = age
    this.setState ({fraterie})
  }

  handleChangeNomY = event => {
    const fraterie = {...this.state.fraterie}
    const nom = event.target.value
    fraterie.membre4.nom = nom
    this.setState ({fraterie})
  }

  handleChangeAgeY = event => {
    const fraterie = {...this.state.fraterie}
    const age = event.target.value
    fraterie.membre4.age = age
    this.setState ({fraterie})
  }

  render () {
    const {titre} = this.props
    const {fraterie} = this.state
    return (
      // React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'React App'))
      // pour plus de praticité on utilise du JSX :
      <Fragment>
        <div className='App'>
          <h1>{titre}</h1>
          <input value={fraterie.membre1.nom} onChange={this.handleChangeNomT} type='text' />
          <input value={fraterie.membre1.age} onChange={this.handleChangeAgeT} type='text' />
          <Membre 
            age={fraterie.membre1.age}
            nom={fraterie.membre1.nom}/>
          <input value={fraterie.membre2.nom} onChange={this.handleChangeNomG} type='text' />
          <input value={fraterie.membre2.age} onChange={this.handleChangeAgeG} type='text' />
          <Membre 
            age={fraterie.membre2.age}
            nom={fraterie.membre2.nom}/>
          <input value={fraterie.membre3.nom} onChange={this.handleChangeNomB} type='text' />
          <input value={fraterie.membre3.age} onChange={this.handleChangeAgeB} type='text' />
          <Membre 
            age={fraterie.membre3.age}
            nom={fraterie.membre3.nom}/>
          <input value={fraterie.membre4.nom} onChange={this.handleChangeNomY} type='text' />
          <input value={fraterie.membre4.age} onChange={this.handleChangeAgeY} type='text' />
          <Membre 
            age={fraterie.membre4.age}
            nom={fraterie.membre4.nom}>
            <strong>Parmi les 4 qui est William ?</strong>
          </Membre>
          <Button 
           vieillir={() => this.handleClick(2)} num="2"/>
        </div>
        
      </Fragment>
    );
}
}

export default App;
