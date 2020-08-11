import React from 'react';

const Greetings = ({ lang, children }) => {
  switch (lang) {
    case 'en':
      lang = 'Hello';
      break;
    case 'es':
      lang = 'Hola';
      break;
    case 'de':
      lang = 'Hallo';
      break;
    case 'fr':
      lang = 'Bonjour';
      break;
    default:
      lang = 'Olá';
  }
  return (
    <div>
      <h6>{lang}</h6>
      <p>{children}</p>
    </div>
  );
};

export default Greetings;
