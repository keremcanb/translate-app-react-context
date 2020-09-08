import React from 'react';
import UserCreate from './UserCreate';

class App extends React.Component {
  state = { language: 'english' };

  onlanguagechange = (language) => {
    this.setState({ language });
  };

  render() {
    return (
      <div className='ui container'>
        <div>
          Select a language:
          <i
            className='flag us'
            onClick={() => this.onlanguagechange('english')}
          />
          <i
            className='flag nl'
            onClick={() => this.onlanguagechange('dutch')}
          />
        </div>
        <UserCreate />
      </div>
    );
  }
}

export default App;
