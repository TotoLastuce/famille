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
  render () {
    const {titre} = this.props
    const {fraterie} = this.state
    return (
      // React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'React App'))
      // pour plus de praticité on utilise du JSX :
      <Fragment>
        <div className='App'>
          <h1>{titre}</h1>
          <Membre 
            age={fraterie.membre1.age}
            nom={fraterie.membre1.nom}/>
          <Membre 
            age={fraterie.membre2.age}
            nom={fraterie.membre2.nom}/>
          <Membre 
            age={fraterie.membre3.age}
            nom={fraterie.membre3.nom}/>
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
