import React, { Component } from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Button extends Component {
  static contextType = LanguageContext;

  render() {
    return <buton className='ui button primary'>Submit</buton>;
  }
}

export default Button;
