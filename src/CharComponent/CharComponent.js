import React from 'react';
import './CharComponent.css';

const CharComponent = props => {
  return (
    <div className="display" onClick={() => props.remove(props.index)}>
      {props.char}
    </div>
  );
};

export default CharComponent;
