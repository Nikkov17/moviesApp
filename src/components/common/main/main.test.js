import React from 'react';
import Main from './main.component';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';

describe('Main', () => {
  beforeEach(() => {
    configure({ adapter: new Adapter() });
  });

  describe('snapshot', () => {
    it('check snaphot with props',() => {
      const component = shallow( <Main moviesList={[{
        id: 1,
        title: 'first movie',
        description: 'first movie description',
        img: 'https://cdn3.movieweb.com/i/movie/gEh4g0Db8qqSuAVOoGuEqYp9XRTdR2/384:50/Shazam.jpg'
      }, {
        id: 2,
        title: 'second movie',
        description: 'second movie description',
        img: 'https://m.media-amazon.com/images/M/MV5BMjQ0NDkyOTg2OF5BMl5BanBnXkFtZTgwMzk4NzcwOTE@._V1_CR0,59,640,360_AL_UX477_CR0,0,477,268_AL_.jpg'
      }, {
        id: 3,
        title: 'third movie',
        description: 'third movie description',
        img: 'https://cdn3.movieweb.com/i/movie/gEh4g0Db8qqSuAVOoGuEqYp9XRTdR2/384:50/Shazam.jpg'
      }, {
        id: 4,
        title: 'fourth movie',
        description: 'fourth movie description',
        img: 'https://m.media-amazon.com/images/M/MV5BMjQ0NDkyOTg2OF5BMl5BanBnXkFtZTgwMzk4NzcwOTE@._V1_CR0,59,640,360_AL_UX477_CR0,0,477,268_AL_.jpg'
      }]} />);
      expect(component).toMatchSnapshot();
    })

    it('check snaphot without props',() => {
        const component = shallow( <Main />);
        expect(component).toMatchSnapshot();
      })
  })
});