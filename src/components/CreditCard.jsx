import React from 'react';

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
    <div className="creditcard">
      <p> {type}</p>
      <p>{number}</p>
      <p>{expirationMonth}</p>
      <p>{expirationYear}</p>
      <p>{bank}</p>
      <p>{owner}</p>
      <p>{bgColor}</p>
      <p>{color}</p>
    </div>
  );
};

export default CreditCard;
