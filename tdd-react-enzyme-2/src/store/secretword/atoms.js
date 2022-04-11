import Recoil from 'recoil';

const guessedWords = [
  {
    word: 'train',
    matchCount: 3,
  },
  {
    word: 'bird',
    matchCount: 1,
  },
  {
    word: 'flood',
    matchCount: 4,
  },
  {
    word: 'car',
    matchCount: 3,
  },
  {
    word: 'red',
    matchCount: 6,
  },
];

const secretWordState = Recoil.atom({
  key: 'secretWordState',
  default: guessedWords,
});

export {
  secretWordState,
};
