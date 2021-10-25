import React from 'react';

// Components
import Header from './components/Header';

// Styles
import { GlobalStyle } from './GlobalStyle';

// const Star = () => React.createElement('div', null, 'This is a super star');

const App = () => {
  return (
    <div className="App">
      <Header />
      Start here.
      <GlobalStyle />
    </div>
  );
  // return Star();
}

export default App;
