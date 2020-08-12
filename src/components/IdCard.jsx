import React from 'react';
import './IdCard.css';

const IdCard = ({
  firstName,
  lastName,
  gender,
  height,
  birthdate,
  picture,
}) => {
  return (
    <div className="idcard">
      <img src={picture} alt="pic" />
      <div>
        <p>First name: {firstName}</p>
        <p>Last name: {lastName}</p>
        <p>Gender: {gender} </p>
        <p>Height: {height / 100}m</p>
        <p>Birth: {birthdate.toDateString()} </p>
      </div>
    </div>
  );
};

export default IdCard;
