/* eslint-disable prettier/prettier */
import goodtimes from './img/goodtimes-small.png';
import goodtimes2 from './img/goodtimes-small.png';
import theracer from './img/theracer-small.png';
import theracer2 from './img/theracer-small.png';
import athlete from './img/athlete1.png';
import athlete2 from './img/athlete2.png';

export const MovieState = () => {
  return [
    {
      title: 'The Athlete',
      mainImg: athlete,
      secondaryImg: athlete2,
      url: '/work/the-athlete',
      awards: [
        {
          title: 'Truly A masterpiece',
          description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, reprehenderit'
        },
        {
          title: 'Fresh look on a brutal sport',
          description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, reprehenderit'
        },
        {
          title: 'Its okay lmao',
          description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, reprehenderit'
        }
      ]
    },
    {
      title: 'Good Times',
      mainImg: goodtimes,
      secondaryImg: goodtimes2,
      url: '/work/goodtimes',
      awards: [
        {
          title: 'Truly A masterpiece',
          description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, reprehenderit'
        },
        {
          title: 'Fresh look on a brutal sport',
          description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, reprehenderit'
        },
        {
          title: 'Its okay lmao',
          description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, reprehenderit'
        }
      ]
    },
    {
      title: 'The racer',
      mainImg: theracer,
      secondaryImg: theracer2,
      url: '/work/the-racer',
      awards: [
        {
          title: 'Truly A masterpiece',
          description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, reprehenderit'
        },
        {
          title: 'Fresh look on a brutal sport',
          description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, reprehenderit'
        },
        {
          title: 'Its okay lmao',
          description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, reprehenderit'
        }
      ]
    }
  ];
};
