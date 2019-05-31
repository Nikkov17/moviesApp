import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import Main from './main.component';

describe('Main', () => {
  beforeEach(() => {
    configure({ adapter: new Adapter() });
  });

  describe('snapshot', () => {
    it('check snaphot with history', () => {
      const history = {
        location: {
          pathname: 'qwe=qwe'
        }
      };
      const component = shallow(<Main updateMoviesList={jest.fn()} moviesList={{}} history={history} />);
      expect(component).toMatchSnapshot();
    });

    it('check snaphot without history', () => {
      const history = {
        location: {
          pathname: 'qwe=qwe'
        }
      };
      const component = shallow(
        <Main updateMoviesList={jest.fn()} history={history} moviesList={{}} />
      );
      expect(component).toMatchSnapshot();
    });
  });
});
