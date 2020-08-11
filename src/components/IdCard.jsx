import React from 'react';

const IdCard = ({
  lastname,
  firstname,
  gender,
  height,
  birthdate,
  picture,
}) => {
  return (
    <div className="idcard">
      <div className="picture">
        <img src={picture} />
      </div>
      <h3>First name: {lastname}</h3>
      <h3>Last name: {firstname}</h3>
      <p>Gender: {gender} </p>
      <p>Height: {height}</p>
      <p>Birth: {birthdate.toString()} </p>
    </div>
  );
};

export default IdCard;
