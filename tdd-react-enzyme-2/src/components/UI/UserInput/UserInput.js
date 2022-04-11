import React from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { guessedWordState } from '../../../store/atoms'
import { randomWordState } from '../../../store/selectors'

const UserInput = () => {
  const [input, setInput] = React.useState('');
  const setGuessedWordState = useSetRecoilState(guessedWordState);
  const randomWord = useRecoilValue(randomWordState);

  function checkMatch(mStr, inpStr) {
    const matchSet = new Set();
    let i = 0;


    Array.from(inpStr).forEach(inpLetter => {
      matchSet.add(inpLetter);
    });

    Array.from(mStr).forEach((letter) => {
      if (matchSet.has(letter)) {
        i += 1;
      }
    });
    console.log({ mStr, inpStr });
    return i;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setGuessedWordState(prevState => prevState.concat({
      word: input,
      matchCount: checkMatch(randomWord, input),
    }))
  };

  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <input
        type="text"
        name="guess"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <input type="submit" />
    </form>
  )
}

export default UserInput