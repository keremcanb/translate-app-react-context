import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

const Button = () => {
  const renderSubmit = (value) =>
    value === 'english' ? 'Submit' : 'Voorleggen';

  const renderButton = (color) => (
    <button className={`ui button ${color}`}>
      <LanguageContext.Consumer>{renderSubmit}</LanguageContext.Consumer>
    </button>
  );

  return (
    <ColorContext.Consumer>
      {(color) => renderButton(color)}
    </ColorContext.Consumer>
  );
};

export default Button;
