import React, { Component } from 'react';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Smurf from './components/Smurf';
import axios from 'axios';
import {Route} from 'react-router-dom';
import {NavLink} from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      activeSmurf: null,
      name: "",
      age: "",
      height: ""
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

  deleteSmurf = (smurf) => {
    axios.delete(`http://localhost:3333/smurfs/${smurf.id}`)
    .then(response => this.setState({smurfs: response.data}))
    .catch(error => console.log(error))
  }

  selectActiveSmurf = (smurf) => {
    this.setState({
      activeSmurf: smurf,
      name: smurf.name,
      age: smurf.age,
      height: smurf.height
    });
    this.props.history.push("/smurf-form/")
  }

  updateSmurf = e => {
    e.preventDefault();
    axios.put(`http://localhost:3333/smurfs/${this.state.activeSmurf.id}`, {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    })
    .then(response => {this.setState({smurfs: response.data, activeSmurf: null}); this.props.history.push("/")})
    .catch(error => console.log(error))
  }

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <nav>
          <NavLink exact to="/" activeClassName="active">Smurf Village</NavLink>
          <NavLink to="/smurf-form/" activeClassName="active">Add a New Smurf</NavLink>
        </nav>
        <Route path="/smurf-form" render={(props) => {
          return(<SmurfForm
            {...props}
            addSmurf={this.addSmurf}
            activeSmurf={this.state.activeSmurf}
            updateSmurf={this.updateSmurf}
            handleInputChange={this.handleInputChange}
            name={this.state.name}
            age={this.state.age}
            height={this.state.height}
          />)
        }} />
        <Route exact path="/" render={(props) => {
          return(<Smurfs {...props} smurfs={this.state.smurfs} deleteSmurf={this.deleteSmurf} selectActiveSmurf={this.selectActiveSmurf}/>)
        }} />
        <Route path="/smurf/:id" render={(props) => {
          return(<Smurf {...props} smurf={this.state.activeSmurf}/>)
        }} />
      </div>
    );
  }
}

export default App;
