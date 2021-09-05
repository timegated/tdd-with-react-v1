import Recoil from 'recoil';

const secretWordState = Recoil.atom({
  key: 'secretWordState',
  default: 'secret word state',
});

export {
  secretWordState,
};
