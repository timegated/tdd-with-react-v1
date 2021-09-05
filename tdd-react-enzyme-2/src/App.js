/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { useSetRecoilState } from 'recoil';
import { secretWordState } from './store/atoms';
import SecretWord from './components/SecretWord/SecretWord';

function App() {
  const secretWords = ['flower','plant','apple','elephant','rhyme'];
  const randomizedWord = secretWords[Math.floor(Math.random() * secretWords.length)];
  const setSecretWord = useSetRecoilState(secretWordState);

  React.useEffect(() => {
    setSecretWord(randomizedWord);
  }, []);

  return (
      <div className="App">
        <SecretWord />
      </div>
  );
}

export default App;
