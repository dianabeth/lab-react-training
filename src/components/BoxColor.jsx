import React from 'react';

const BoxColor = ({ r, g, b }) => {
  return (
    <div style={color}>
      <h2>
        rgb( {r},{g},{b})
      </h2>
    </div>
  );
};

export default BoxColor;

const color = {
  color: 'white',
  backgroundColor: 'red',
  padding: '20px',
  lineHeight: '1',
  margin: '5px',
  border: '3px solid black',
};
