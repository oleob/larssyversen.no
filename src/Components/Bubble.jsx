import React from 'react';

const Bubble =  props => (
  <div className ={props.name}>
    <img className="bubbleImage" alt="bubble" src="./bubble.png" />
    <h1 className="bubbleText">{props.text}</h1>
  </div>
);

export default Bubble;
