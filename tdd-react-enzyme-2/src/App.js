/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { useSetRecoilState } from 'recoil';
import { secretWordState } from './store/atoms';
import SecretWord from './components/SecretWord/SecretWord';

function App() {
  return (
      <div className="App">
        <SecretWord />
      </div>
  );
}

export default App;
