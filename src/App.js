import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <Person name="Ollie" age="28" />
        <Person name="Aggie" age="22">My Hobbies: Playing with my phone</Person>
        <Person name="Jurgen" age="1"/>
      </div>
    );
    // return React.createElement('div', null, React.createElement('h1', 
    //   {className: 'App'}, 'Hi, I\'m a React App!!!'));
  }
}

export default App;
