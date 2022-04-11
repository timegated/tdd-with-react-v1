/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import SecretWord from './components/UI/SecretWord/SecretWord';

function App() {
  return (
      <div className="App">
        <SecretWord data-test="secret-word" />
      </div>
  );
}

export default App;
