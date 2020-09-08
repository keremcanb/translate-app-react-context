import React, { useContext } from 'react';
import LanguageContext from '../contexts/LanguageContext';

const Button = () => {
  const context = useContext(LanguageContext);

  const text = context === 'english' ? 'Submit' : 'Voorleggen';

  return <button className='ui button primary'>{text}</button>;
};

export default Button;
