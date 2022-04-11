import Recoil from 'recoil';

const secretWords = [
  'bird',
  'train',
  'car',
  'iridocyclitis',
  'calculus'
];

const secretWordState = Recoil.atom({
  key: 'secretWordState',
  default: secretWords,
});

const guessedWordState = Recoil.atom({
  key: 'guessedWordState',
  default: [],
})

export {
  secretWordState,
  guessedWordState,
};
