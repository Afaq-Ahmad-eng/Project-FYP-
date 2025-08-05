import React, { useState, useEffect } from 'react';
import "./WeatherForecast.css"

const API_KEY = '93cfa42b612b016821b79377b2834871';  // Your API key here

export default function WeatherForecast({ city }) {
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!city) return;

    const fetchForecast = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`
        );

        if (!response.ok) {
          throw new Error('City not found');
        }

        const data = await response.json();

        // The API returns data every 3 hours — we want to pick one forecast per day.
        // We'll pick the forecast at 12:00 PM each day.
        const dailyForecasts = data.list.filter(item => item.dt_txt.includes('12:00:00'));

        setForecast(dailyForecasts);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchForecast();
  }, [city]);

  if (!city) {
    return <p>Please enter a city to see the weather forecast.</p>;
  }

  if (loading) return <p>Loading forecast...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>5-Day Weather Forecast for {city}</h2>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        {forecast.map(day => (
          <div key={day.dt} style={{ border: '1px solid #ccc', padding: '10px', width: '18%' }}>
            <p>{new Date(day.dt_txt).toLocaleDateString()}</p>
            <p>Temp: {day.main.temp}°C</p>
            <p>{day.weather[0].description}</p>
            <img 
              src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`} 
              alt={day.weather[0].description} 
            />
          </div>
        ))}
      </div>
    </div>
  );
}
