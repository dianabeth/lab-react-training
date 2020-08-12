import React from 'react';

const Greetings = ({ lang, children }) => {
  let msg;
  switch (lang) {
    case 'en':
      msg = 'Hello';
      break;
    case 'es':
      msg = 'Hola';
      break;
    case 'de':
      msg = 'Hallo';
      break;
    case 'fr':
      msg = 'Bonjour';
      break;
    default:
      msg = 'Olá';
  }
  return (
    <div>
      <p>
        {msg}
        {children}
      </p>
    </div>
  );
};

export default Greetings;
