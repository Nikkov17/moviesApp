import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import Listcard from './listcard.component';

describe('Listcard', () => {
  beforeEach(() => {
    configure({ adapter: new Adapter() });
  });

  describe('snapshot', () => {
    it('check snaphot', () => {
      const component = shallow(<Listcard item={{
        title: 'check title',
        description: 'check description',
        img: 'check img'
      }}
      />);
      expect(component).toMatchSnapshot();
    });
  });
});
