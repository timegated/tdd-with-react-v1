import React from 'react';
import { useRecoilValue } from 'recoil';
import { randomWordState } from '../../store/selectors';

const SecretWord = () => {
  const secretWord = useRecoilValue(randomWordState);
  const { word } = secretWord;
  console.log(`%c ${secretWord}`, 'font-size:18px; color:orange;');
  return (
    <div>
      <h1>{word.toUpperCase()}</h1>
    </div>
  );
};

export default SecretWord;
