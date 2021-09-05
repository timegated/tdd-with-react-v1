import React from 'react';
import { useRecoilValue } from 'recoil';
import { randomWordState } from '../../store/selectors';

const SecretWord = () => {
  const secretWord = useRecoilValue(randomWordState);
  console.log(`%c ${secretWord}`, 'font-size:18px; color:orange;');
  return (
    <div>
      <h1>{secretWord.toUpperCase()}</h1>
    </div>
  );
};

export default SecretWord;
