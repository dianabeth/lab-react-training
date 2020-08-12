import React from 'react';
import './CreditCard.css';
const CreditCard = ({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color,
}) => {
  return (
    <div
      className="credit-card"
      style={{ backgroundColor: bgColor, color: color }}
    >
      <div className="type">
        <h4> {type} </h4>
      </div>

      <div className="number">
        <p> **** **** **** {number.substr(-4)}</p>
      </div>
      <div className="info">
        <div className="infoLine">
          <p>
            Expires {('0' + expirationMonth).substr(-2)}/
            {expirationYear.toString().substr(2)}
          </p>
          <p className="bank">{bank}</p>
        </div>
        <div>
          <p>{owner}</p>
        </div>
      </div>
    </div>
  );
};

export default CreditCard;
