import Recoil, { snapshot_UNSTABLE } from 'recoil';

const numberState = Recoil.atom({key: 'Number', default: 0});

const multipliedState = Recoil.selector({
  key: 'MultipliedNumber',
  get: ({get}) => get(numberState) * 100,
});

test('State starts at 0 and is multipled by 100', () => {
  const initialSnapshot = snapshot_UNSTABLE();
  expect(initialSnapshot.getLoadable(multipliedState).valueOrThrow()).toBe(0);

  const testSnapshot = snapshot_UNSTABLE(({set}) => set(numberState, 1));
  expect(testSnapshot.getLoadable(multipliedState).valueOrThrow()).toBe(100);
})
