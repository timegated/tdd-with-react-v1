import React from 'react';
import Enzyme, { mount } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import { RecoilRoot } from 'recoil';
import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() });

// Rendering our App Component in isolation
const setup = (props = {}) => {
  return mount(
    <RecoilRoot>
      <App {...props} />
    </RecoilRoot>,
  );
};

// Util function that finds the data-test attribute on the wrapper
const findDataTest = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

describe('The Root App Component renders a SecretWord Component', () => {
  test('renders learn react link', () => {
    const wrapper = setup();
    const appComponent = findDataTest(wrapper, 'secret-word');
    expect(appComponent.length).toBe(1);
    expect(appComponent).toMatchSnapshot();
  });
});
