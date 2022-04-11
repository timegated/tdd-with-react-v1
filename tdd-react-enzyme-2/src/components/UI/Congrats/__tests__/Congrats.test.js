import { shallow } from 'enzyme';
import { findByTestAttr } from '../../../../utils/testUtils';
import Congrats from '../Congrats';

/**
 * Renders the component in a test env with optional props
 * @param {*} props 
 * @returns {React.Component}
 */
const setup = (props = {}) => {
  return shallow(<Congrats {...props} />);
};

describe('Congrats component behavior', () => {
  // render tests
  it('should render without error', () => {
    const wrapper = setup();
    const container = findByTestAttr(wrapper, 'congrats');

    expect(container.length).toBe(1);
  });

  it('should render nothing when success prop is false', () => {
    const wrapper = setup({ success: false });
    const container = findByTestAttr(wrapper, 'congrats');

    expect(container.text()).toBe('');
  });

  it('should rendera non-empty congrats message when success prop is true', () => {
    const wrapper = setup({ success: true });
    const container = findByTestAttr(wrapper, 'congrats');

    expect(container.text()).not.toBe('');
    expect(container.text()).toBe('Congrats! You\'re the winner!');
  });
});
