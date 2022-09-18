import React, { Component } from 'react';
import Image from '../SimpleComponents/Image';
import './ForecastToday.css';



export default class ForecastToday extends Component {
// state = {
//     temp : '+25ºC',
//     cloudnes : 'Ясно',
//     day_night : 'Днем',
//     imgUrl : 'weather_sun_sunny_temperature_icon.png' 
// }
    render() {
        const {temp,cloudnes,day_night,imgUrl} = this.props;
        const baseUrl = 'img/weather/cloudnes/';
        return (
            <div className='forecast_today'>
                <div className='forecast_today_text'>
                    <label > {day_night}</label>
                    {temp}
                    <span> </span>
                    <label > {cloudnes}</label>
                </div>
                <Image
                    urlImg={`${baseUrl}${imgUrl}`}
                    alt={`${imgUrl}`}
                />
            </div>
        )
    }
}