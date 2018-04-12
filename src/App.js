import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 'aaa111', name: 'Ollie', age: 28 },
      { id: 'aaa112', name: 'Aggie', age: 22 },
      { id: 'aaa113', name: 'Jurgen', age: 1 }
    ],
    showPersons: false
  }

  // switchNameHandler = (newName) => {
  //   // console.log('Was clicked!');
  //   // DON'T DO THIS: this.state.persons[0].name = "Olivier";    
  //   this.setState({ 
  //     persons: [
  //       { name: newName, age: 28 },
  //       { name: 'Aggie', age: 22 },
  //       { name: 'Jørgen', age: 1 }  
  //     ]
  //   })
  // }

  nameChangedHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( { persons: persons } );
    }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState( { showPersons: !doesShow } );
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'tahoma',
      border: '1px solid grey',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              key={person.id}
              click={() => this.deletePersonHandler(index)} 
              name={person.name} 
              age={person.age}
              changed={(event) => this.nameChangedHandler(event, person.id)}/>
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
      style.backgroundColor = 'red';
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red'); // classes = ['red]
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold'); // classes = ['red', 'bold']
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        <button
          className="btn" 
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
