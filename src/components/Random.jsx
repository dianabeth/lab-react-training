import React from 'react';

const Random = ({ max, min }) => {
  let randomVal = Math.floor(Math.random() * (max - min + min));
  return (
    <h6>
      This ia a random value between {min} and {max} = {'>'} {randomVal}
    </h6>
  );
};

export default Random;
