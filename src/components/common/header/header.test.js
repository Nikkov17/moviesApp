import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import Header from './header.component';

describe('Header', () => {
  beforeEach(() => {
    configure({ adapter: new Adapter() });
  });

  describe('snapshot', () => {
    it('check snaphot', () => {
      const component = shallow(<Header />);
      expect(component).toMatchSnapshot();
    });
  });
});
