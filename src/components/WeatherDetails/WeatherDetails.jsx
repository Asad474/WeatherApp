import React from 'react';
import wind from '../../assets/wind.png';
import humidity from '../../assets/humidity.png';
import location from '../../assets/location.png';
import Weather from './Weather/Weather';
import './WeatherDetails.css';

const WeatherDetials = props => {
  return (
    <div className='content'>

      <div className="info">
        <Weather weather={props.weather}/>

        <div className="info-details">
          <h1 className="temperatute">
            {props.temperature}°C
          </h1>

          <h2 className="weather">
            {props.weather}
          </h2>
        </div>
      </div>

      <div className="details">
        <div className="wind">
          <img src={wind} alt="" className="windImg"/>
          <div>
            <h3>{props.windspeed}m/s</h3>
            <h4>Wind Speed</h4>
          </div>
        </div>

        <div className="wind humidity">
          <img src={humidity} alt="" className="windImg"/>
          <div>
            <h3>{props.humidity}%</h3>
            <h4>Humidity</h4>
          </div>
        </div>

        <div className="wind location">
          <img src={location} alt="" className="locationImg"/>
          <div>
            <h3>{props.city}</h3>
          </div>
        </div>

        <div className="wind latlong">
          <div className='lat-long'>
            <h3>Latitude:</h3>
            <h4>{props.latitude}</h4>
          </div>
          <div className="lat-long">
            <h3>Longitude:</h3>
            <h4>{props.longitude}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherDetials;