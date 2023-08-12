import React, {useState, useEffect} from 'react';
import InputLocation from './components/InputLocation/InputLocation';
import WeatherDetails from './components/WeatherDetails/WeatherDetails';
import './App.css';
// import dotenv from 'dotenv';
// dotenv.config();

function App() {
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const weatherlocation = city => {
    setLocation(city);
  };
  
  useEffect(() => {
    if (location.length > 0){
      const fetchWeatherdata = async() => {
        try{
          const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.REACT_APP_API_KEY}`);

          if (!response.ok){
            setWeatherData('');
          } 

          else{
            const data = await response.json();
            console.log(data);
            setWeatherData(data)
          }
        } catch(err){
          console.log(err);
        }
      };

      fetchWeatherdata();
    }
  }, [location]);

  console.log(weatherData);

  return (
    <div className="weather-container">
      <InputLocation getLocation={weatherlocation} />
      
      {weatherData && <WeatherDetails 
          temperature={(weatherData.main.temp-273.15).toFixed(2)}
          weather={weatherData.weather[0]['main']}
          city={weatherData.name}
          latitude={weatherData.coord.lat}
          longitude={weatherData.coord.lon}
          windspeed={weatherData.wind.speed}
          humidity={weatherData.main.humidity}
      />}
    </div>
  );
}

export default App;