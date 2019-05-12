import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import Input from './input.component';

describe('input', () => {
  beforeEach(() => {
    configure({ adapter: new Adapter() });
  });

  describe('onFormSubmit', () => {
    it('should call updateMoviesList', () => {
      const component = shallow(
        <Input updateMoviesList={jest.fn()} />
      );
      const instance = component.instance();

      jest.spyOn(instance, 'onFormSubmit');
      instance.inputRef = {
        current: {
          value: 'check'
        }
      };

      component.find('.input-container-wrapper').simulate('submit', {
        preventDefault: jest.fn()
      });

      expect(instance.props.updateMoviesList).toHaveBeenCalledWith('check');
    });
  });

  describe('snapshot', () => {
    it('check snaphot', () => {
      const component = shallow(<Input updateMoviesList={() => {
        return true;
      }}
      />);
      expect(component).toMatchSnapshot();
    });
  });
});
