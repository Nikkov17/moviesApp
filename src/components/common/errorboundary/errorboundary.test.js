import React from 'react';
import ErrorBoundary from './errorboundary.component';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';

describe('ErrorBoundary', () => {
  beforeEach(() => {
    configure({ adapter: new Adapter() });
  });

  describe('constructor', () => {
    it('should set state',() => {
      const component = shallow(<ErrorBoundary />);
      const instance = component.instance();

      expect(instance.state).toEqual({
        hasError: false
      });
    })
  })

  describe('snapshot', () => {
    it('check snaphot',() => {
      const component = shallow( <ErrorBoundary />);
      expect(component).toMatchSnapshot();
    })
  })
});