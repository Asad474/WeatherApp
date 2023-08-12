import React from 'react';
import clear from '../../../assets/weather/clear.png';
import clouds from '../../../assets/weather/clouds.png';
import drizzle from '../../../assets/weather/drizzle.png';
import rain from '../../../assets/weather/rain.png';
import snow from '../../../assets/weather/snow.png';
import thunderstorm from '../../../assets/weather/thunderstorm.png';
import ash from '../../../assets/weather/ash.png';
import dust from '../../../assets/weather/dust.png';
import fog from '../../../assets/weather/fog.png';
import haze from '../../../assets/weather/haze.png';
import mist from '../../../assets/weather/mist.png';
import sand from '../../../assets/weather/sand.png';
import smoke from '../../../assets/weather/smoke.png';
import squall from '../../../assets/weather/squall.png';
import tornado from '../../../assets/weather/tornado.png';
import './Weather.css';

const Weather = props => {
    let weatherImg;

    switch(props.weather){
        case 'Clouds': 
            weatherImg=clouds;
            break; 

        case 'Drizzle': 
            weatherImg=drizzle;
            break;     
            
        case 'Rain': 
            weatherImg=rain;
            break;      

        case 'Snow': 
            weatherImg=snow;
            break;     

        case 'Thunderstorm': 
            weatherImg=thunderstorm;
            break;     

        case 'Ash': 
            weatherImg=ash;
            break;        
            
        case 'Dust': 
            weatherImg=dust;
            break;         

        case 'Fog': 
            weatherImg=fog;
            break;         

        case 'Haze': 
            weatherImg=haze;
            break;         

        case 'Mist': 
            weatherImg=mist;
            break;         

        case 'Sand': 
            weatherImg=sand;
            break;         

        case 'Smoke': 
            weatherImg=smoke;
            break;         

        case 'Squall': 
            weatherImg=squall;
            break;         
        
        case 'Tornado': 
            weatherImg=tornado;
            break;         

        default: 
            weatherImg=clear;
            break;
    };

    return (
        <img src={weatherImg} alt="" className='weather-type'/>
    );
};

export default Weather;