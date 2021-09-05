import React from 'react';
import { useRecoilValue } from 'recoil';
import { secretWordState } from '../../store/atoms';

const SecretWord = () => {
  const secretWord = useRecoilValue(secretWordState);
  console.log(`%c ${secretWord}`, 'font-size:18px; color:orange;');
  return (
    <div>
      <h1>{secretWord.toUpperCase()}</h1>
    </div>
  );
};

export default SecretWord;
