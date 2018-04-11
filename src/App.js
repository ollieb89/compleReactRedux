import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Ollie', age: 28 },
      { name: 'Aggie', age: 22 },
      { name: 'Jurgen', age: 1 }
    ],
    showPersons: false
  }

  switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = "Olivier";    
    this.setState({ 
      persons: [
        { name: newName, age: 28 },
        { name: 'Aggie', age: 22 },
        { name: 'Jørgen', age: 1 }  
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState( { 
      persons: [
        { name: 'Olivier', age: 28 },
        { name: event.target.value, age: 22 },
        { name: 'Jørgen', age: 1 }  
      ]
    } )
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState( { showPersons: !doesShow } );
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'tahoma',
      border: '1px solid grey',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map(person => {
            return <Person 
              name={person.name} 
              age={person.age}/>
          })}

          {/* <Person 
            name={this.state.persons[0].name} 
            age={this.state.persons[0].age} />
          <Person 
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, 'Olly')}
            changed={this.nameChangedHandler} >My Hobbies: Playing with my phone</Person>
          <Person 
            name={this.state.persons[2].name} 
            age={this.state.persons[2].age}/> */}
        </div> 
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button 
          style={style}
          // onClick={() => this.switchNameHandler('Olivier')}>Switch Name</button>
          onClick={this.togglePersonsHandler}>Toggle visibility</button>
          {persons}
      </div>
    );
    // return React.createElement('div', null, React.createElement('h1', 
    //   {className: 'App'}, 'Hi, I\'m a React App!!!'));
  }
}

export default App;
