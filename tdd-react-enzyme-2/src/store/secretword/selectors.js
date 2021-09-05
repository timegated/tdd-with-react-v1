import Recoil from 'recoil';
import { secretWordState } from './atoms';

const randomWordState = Recoil.selector({
  key: 'randomWordState',
  get: ({ get }) => {
    const secretWords = get(secretWordState);
    const random = Math.floor(Math.random() * secretWords.length);
    return secretWords[random];
  },
});

export {
  randomWordState,
};
