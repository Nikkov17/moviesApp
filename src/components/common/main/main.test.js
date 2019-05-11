import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import Main from './main.component';

describe('Main', () => {
  beforeEach(() => {
    configure({ adapter: new Adapter() });
  });

  describe('snapshot', () => {
    it('check snaphot with props', () => {
      const component = shallow(<Main moviesList={{}} />);
      expect(component).toMatchSnapshot();
    });

    it('check snaphot without props', () => {
      const component = shallow(<Main />);
      expect(component).toMatchSnapshot();
    });
  });
});
