import React from 'react';
import {Link} from 'react-router-dom';

const Smurf = props => {
  return (
    <Link to={`/smurf/${props.smurf.id}`} onClick={() => props.selectActiveSmurf(props.smurf)}>
      <h3>{props.smurf.name}</h3>
      <strong>{props.smurf.height} tall</strong>
      <p>{props.smurf.age} smurf years old</p>
      <button onClick={() => props.deleteSmurf(props.smurf)}>Delete Smurf</button>
      <button onClick={() => props.selectActiveSmurf(props.smurf)}>Update Smurf</button>
    </Link>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;
