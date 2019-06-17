import React from 'react';

function SmurfForm(props) {
  return (
    <div className="SmurfForm">
      <form onSubmit={props.activeSmurf === null ? props.addSmurf : props.updateSmurf}>
        <input
          placeholder="name"
          name="name"
          id="name"
          value={props.name}
          onChange={props.handleInputChange}
        />
        <input
          placeholder="age"
          name="age"
          id="age"
          value={props.age}
          onChange={props.handleInputChange}
        />
        <input
          placeholder="height"
          name="height"
          id="height"
          value={props.height}
          onChange={props.handleInputChange}
        />
        <button type="submit">{props.activeSmurf === null ? "Add Smurf to Village" : "Update Smurf"}</button>
      </form>
    </div>
  );
}

export default SmurfForm;
