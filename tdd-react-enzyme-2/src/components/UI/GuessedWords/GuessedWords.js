import React from 'react';

const GuessedWords = (props) => {
  const displayContent = (propVal) => {
    if(!propVal.guessedWords.length) {
      return (
        <section data-test="guess-instructions">
          Try to guess the secret word
        </section>
      );
    }
    return (
      <section>
        {propVal.guessedWords.map((word, index) => (
          <div key={index}>
            You guessed: {word.word} {' '} {word.matchCount}
          </div>
        ))}
      </section>
    );
  };

  return (
    <section data-test="guessed-words">
      {displayContent(props)}
    </section>
  );
};

export default GuessedWords;