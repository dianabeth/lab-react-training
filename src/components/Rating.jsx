import React from 'react';

const Rating = (props) => {
  const stars = Math.round(parseFloat(props.children));
  return <div>{'★'.repeat(stars) + '☆'.repeat(5 - stars)}</div>;
};

export default Rating;
