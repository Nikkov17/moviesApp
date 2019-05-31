import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import App from './app';

describe('App', () => {
  beforeEach(() => {
    configure({ adapter: new Adapter() });
  });

  describe('snapshot', () => {
    it('check snaphot', () => {
      const component = shallow(<App />);
      expect(component).toMatchSnapshot();
    });
  });
});
