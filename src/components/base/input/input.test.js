import React from 'react';
import Input from './input.component';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow} from 'enzyme';

describe('input', () => {
  beforeEach(() => {
    configure({ adapter: new Adapter() })
  });

  describe('onFormSubmit', () => {
    it('should call getMoviesList',() => {
      const component = shallow(
        <Input getMoviesList={jest.fn()} />
      );
      const instance = component.instance();

      spyOn(instance, 'onFormSubmit');
      instance.inputRef = {
        current: {
          value: 'check'
        }
      };

      component.find('.input-container-wrapper').simulate('submit',{
        preventDefault: jest.fn()
      });

      expect(instance.props.getMoviesList).toHaveBeenCalledWith([{
        title: 'this is components feedback check',
        description: `value from input: check`
      }]);
    })
  })

  describe('snapshot', () => {
    it('check snaphot',() => {
      const component = shallow( <Input getMoviesList={() => {
        return true;
      }}/>);
      expect(component).toMatchSnapshot();
    })
  })
});