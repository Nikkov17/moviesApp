import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import Input from './input.component';

const history = {
  push: jest.fn()
};

describe('input', () => {
  beforeEach(() => {
    configure({ adapter: new Adapter() });
  });

  describe('onFormSubmit', () => {
    it('should call updateMoviesList', () => {
      const component = shallow(
        <Input updateMoviesList={jest.fn()} history={history} />
      );
      const instance = component.instance();

      jest.spyOn(instance, 'onFormSubmit');
      instance.inputRef = {
        current: {
          value: 'check'
        }
      };
      const searchUrlParams = new URLSearchParams();
      searchUrlParams.set('search', 'check');

      component.find('.input-container-wrapper').simulate('submit', {
        preventDefault: jest.fn()
      });

      expect(instance.props.updateMoviesList).toHaveBeenCalledWith(searchUrlParams);
    });
  });

  describe('snapshot', () => {
    it('check snaphot', () => {
      const component = shallow(
        <Input updateMoviesList={jest.fn()} history={history} />
      );
      expect(component).toMatchSnapshot();
    });
  });
});
