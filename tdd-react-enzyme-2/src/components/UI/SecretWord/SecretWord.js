import React from 'react';
import { useRecoilValue } from 'recoil';
import { randomWordState } from '../../../store/selectors';
import { guessedWordState } from '../../../store/atoms';
import Congrats from '../Congrats/Congrats';
import GuessedWords from '../GuessedWords/GuessedWords';
import UserInput from '../UserInput/UserInput';

const SecretWord = () => {
  // TODO: save secret word in localhost in event of refresh
  const secretWord = useRecoilValue(randomWordState);
  const guessedWords = useRecoilValue(guessedWordState);

  console.log(`%c ${secretWord}`, 'font-size:18px; color:orange;');

  return (
    <>
      <section>
        <h1>{secretWord.toUpperCase()}</h1>
      </section>
      <UserInput />
      <GuessedWords guessedWords={guessedWords} />
      <Congrats />
    </>
  );
};

export default SecretWord;
