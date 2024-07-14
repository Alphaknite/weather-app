import React from "react";
import { useState } from "react";
import WeatherUI from "./WeatherUI";
import WeatherForm from "./WeatherForm";
import Header from "./Header";

const Weather = () => {
    const [place, setPlace] = useState("");
    const [weatherData, setWeatherData] = useState(null);
    const [forecastData, setForecastData] = useState(null);

    const handleInputChange = (e) => {
        setPlace(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchWeather(place);
        fetchForecast(place);
        setPlace("");
    };

    const fetchWeather = async (plc) => {
        const response = await fetch(
            `https://api.weatherapi.com/v1/current.json?key=${
                import.meta.env.VITE_WEATHER_API_KEY
            }&q=${plc}&aqi=yes`
        );
        const data = await response.json();
        setWeatherData(data);
    };
    const fetchForecast = async (plc) => {
        const response = await fetch(
            `https://api.weatherapi.com/v1/forecast.json?key=${
                import.meta.env.VITE_WEATHER_API_KEY
            }&q=${plc}&days=10&aqi=yes&alerts=yes`
        );
        const data = await response.json();
        setForecastData(data);
    };

    return (
        <>
            <Header />
            <WeatherForm
                handleSubmit={handleSubmit}
                handleInputChange={handleInputChange}
                place={place}
            />
            {weatherData && forecastData && (
                <WeatherUI
                    location={weatherData.location}
                    current={weatherData.current}
                    forecast={forecastData.forecast}
                />
            )}
        </>
    );
};

export default Weather;
