import React, { Component } from 'react';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import axios from 'axios';
import {Route} from 'react-router-dom';
import {NavLink} from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.

  componentDidMount() {
    axios.get('http://localhost:3333/smurfs')
    .then(response => this.setState({smurfs: response.data}))
    .catch(error => console.log(error))
  }

  addSmurf = e => {
    e.preventDefault();
    axios.post('http://localhost:3333/smurfs', {
      name: document.getElementById("name").value,
      age: document.getElementById("age").value,
      height: document.getElementById("height").value})
      .then(response => {this.setState({smurfs: response.data}); this.props.history.push("/")})
      .catch(error => console.log(error))
  }

  render() {
    return (
      <div className="App">
        <nav>
          <NavLink to="/" >Smurf Village</NavLink>
          <NavLink to="smurf-form">Add a New Smurf</NavLink>
        </nav>
        <Route path="/smurf-form" render={(props) => {
          return(<SmurfForm {...props} addSmurf={this.addSmurf}/>)
        }} />
        <Route exact path="/" render={(props) => {
          return(<Smurfs {...props} smurfs={this.state.smurfs} />)
        }} />
      </div>
    );
  }
}

export default App;
