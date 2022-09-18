import React, { Component } from 'react';
import ForecastToday from '../ForecastToday';
import Today from '../Today';
import SecondaryPanel from '../SecondaryPanel/SecondaryPanel';

import './App.css';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        label: 'Это заголовок погоды'
      },
      weawer: {
        temp: -29,
        wet: 56,
        pressure: 750,
        cloudnes: 'clear',
        wind: 'north',
        fallout: 'rain'
      }
    }
  }

  render() {
    const { data, weawer } = this.state;
    const message = data.label;
    const { temp, wet, pressure, cloudnes, wind, fallout } = weawer;

    return (
      <div className='grid-container'>
        <Today />
        <ForecastToday
          temp='+26ºC'
          cloudnes='Ясно'
          day_night='Днём'
          imgUrl='weather_sun_sunny_temperature_icon.png'
        />
        <ForecastToday
          temp='+19ºC'
          cloudnes='Ясно'
          day_night='Ночью'
          imgUrl='weather_moon_night_snow_icon.png'
        />
        <SecondaryPanel />
      </div>
    )
  }
}


// const arr = ['Nick', 'Frank', 'Joe', 'Frank'];
// const foundIndex = arr.findIndex(el => el === 'Frak');

// console.log(foundIndex);


// const arr = ['Nick', 'Frank', 'Joe', 'Frank'];
// const foundIndex = arr.indexOf('Frak');

// console.log(foundIndex);

// let arr = [1, 2, 3, 4];
// console.log('arr.length' , arr.length );
// const shifted = arr.shift();

// console.log(arr);
// // [2, 3, 4]
// console.log('arr.length', arr.length );
// console.log(shifted );
// // 1