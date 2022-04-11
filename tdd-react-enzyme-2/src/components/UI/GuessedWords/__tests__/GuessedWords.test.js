import { shallow } from 'enzyme';
import GuessedWords from '../GuessedWords';
import { findByTestAttr } from '../../../../utils/testUtils';

const defaultProps = {
  guessedWords: [
    {
      guessedWord: 'train',
      matchCount: 3,
    },
  ]
};

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props }
  return shallow(<GuessedWords  {...setupProps} />);
};

describe('The GuessedWords component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup([]);
  });

  it('renders correctly.', () => {
    const container = findByTestAttr(wrapper, 'guessed-words');

    expect(container.length).toBe(1);
    expect(container.length).not.toBe(0);
  });

  it('when a word is guessed is it checked against the secret word', () => {

  });
});
