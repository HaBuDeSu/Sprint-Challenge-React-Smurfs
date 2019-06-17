import React from 'react';
import {Link} from 'react-router-dom';

const Smurf = props => {
  return (
    <div className="smurf">
      <Link to={`/smurf/${props.smurf.id}`} onClick={() => props.selectActiveSmurf(props.smurf)}>
        <h3>{props.smurf.name}</h3>
        <strong>{props.smurf.height} tall</strong>
        <p>{props.smurf.age} smurf years old</p>
      </Link>
    <button className="delete-button" onClick={() => props.deleteSmurf(props.smurf)}>Delete Smurf</button>
    <button className="update-button" onClick={() => props.selectActiveSmurf(props.smurf)}>Update Smurf</button>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;
