import React from 'react';
import Rating from './Rating';
import './DriverCard.css';
const DriverCard = ({ img, name, rating, car }) => {
  return (
    <div className="driver-card">
      <img src={img} alt={name} />
      <div>
        <h3>{name}</h3>
        <Rating>{rating}</Rating>
        <span>
          {car.model} - {car.licensePlate}
        </span>
      </div>
    </div>
  );
};

export default DriverCard;
