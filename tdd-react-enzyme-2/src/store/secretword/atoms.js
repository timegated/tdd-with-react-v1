import Recoil from 'recoil';

const secretWordState = Recoil.atom({
  key: 'secretWordState',
  default: ['flower','plant','apple','elephant','rhyme'],
});

export {
  secretWordState,
};
