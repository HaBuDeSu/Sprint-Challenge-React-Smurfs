import React from 'react';

function SmurfForm(props) {
  return (
    <div className="SmurfForm">
      <form onSubmit={props.addSmurf}>
        <input
          placeholder="name"
          name="name"
          id="name"
        />
        <input
          placeholder="age"
          name="age"
          id="age"
        />
        <input
          placeholder="height"
          name="height"
          id="height"
        />
        <button type="submit">Add to the village</button>
      </form>
    </div>
  );
}

export default SmurfForm;
