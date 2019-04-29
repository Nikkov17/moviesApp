import React from 'react';
import App from './app';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';

describe('App', () => {
  beforeEach(() => {
    configure({ adapter: new Adapter() });
  });

  describe('constructor', () => {
    it('should set mocked state',() => {
      const component = shallow(<App />);
      const instance = component.instance();

      expect(instance.state).toEqual({
        moviesList: [{
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
        }]
      });
    })
  })

  describe('getMoviesList', () => {
    it('should call setState with data',() => {
        const component = shallow(<App />);
        const instance = component.instance();

        spyOn(instance, 'setState');

        instance.getMoviesList('test');

        expect(instance.setState).toHaveBeenCalledWith({
            moviesList: 'test'
        });
    });
  })

  describe('snapshot', () => {
    it('check snaphot',() => {
      const component = shallow(<App />);
      expect(component).toMatchSnapshot();
    })
  })
});