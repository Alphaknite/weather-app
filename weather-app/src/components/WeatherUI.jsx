import React, { useState } from "react";
import { Button, Spinner } from "flowbite-react";
import HourlyForecast from "./HourlyForecast";

const WeatherUI = ({ location, current, forecast }) => {
    const weatherPClassName = "text-l mb-2";
    const weatherSpanClassName = "font-semibold";

    if (!location || !current || !current.condition || !forecast) {
        return (
            <div className="flex justify-center p-6 rounded-lg max-w-sm mx-auto">
                <Button color="gray" className="cursor-default">
                    <Spinner
                        aria-label="Alternate spinner button example"
                        size="sm"
                    />
                    <span className="pl-3">Loading...</span>
                </Button>
            </div>
        );
    }
    const forecastDay = forecast.forecastday[0].day;
    const hourlyForecast = forecast.forecastday[0].hour;

    return (
        <>
            <div className="p-6 rounded-lg shadow-lg max-w-xl mx-auto">
                <div className="text-center mb-4">
                    <h1 className="text-4xl">{location.name}</h1>
                    <p className="text-3xl">{current.temp_f}°F</p>
                    <p>{current.condition.text}</p>
                    <p className={weatherPClassName}>
                        <span className={weatherSpanClassName}>H:</span>
                        {forecastDay.maxtemp_f}°{" "}
                        <span className={weatherSpanClassName}>L:</span>
                        {forecastDay.mintemp_f}°
                    </p>
                </div>
                <HourlyForecast hourly={hourlyForecast} />

                
                <div className="p-4">
                    <div className="flex justify-between mb-4">
                        <p className={weatherPClassName}>
                            <span className={weatherSpanClassName}>High:</span>{" "}
                            {forecastDay.maxtemp_f}°F
                        </p>
                        <p className={weatherPClassName}>
                            <span className={weatherSpanClassName}>Low:</span>{" "}
                            {forecastDay.mintemp_f}°F
                        </p>
                    </div>
                    <div className="flex justify-between mb-4">
                        <p className={weatherPClassName}>
                            <span className={weatherSpanClassName}>
                                Humidity:
                            </span>{" "}
                            {current.humidity}%
                        </p>
                        <p className={weatherPClassName}>
                            <span className={weatherSpanClassName}>Wind:</span>{" "}
                            {current.wind_mph} mph
                        </p>
                    </div>
                    <div className="flex justify-between mb-4">
                        <p className={weatherPClassName}>
                            <span className={weatherSpanClassName}>
                                Precipitation:
                            </span>{" "}
                            {forecastDay.totalprecip_in} in
                        </p>
                        <p className={weatherPClassName}>
                            <span className={weatherSpanClassName}>
                                Visibility:
                            </span>{" "}
                            {forecastDay.avgvis_miles} miles
                        </p>
                    </div>
                    <div className="flex justify-between mb-4">
                        <p className={weatherPClassName}>
                            <span className={weatherSpanClassName}>
                                Chance of Rain:
                            </span>{" "}
                            {forecastDay.daily_chance_of_rain}%
                        </p>
                        <p className={weatherPClassName}>
                            <span className={weatherSpanClassName}>
                                Time of Day:
                            </span>{" "}
                            {current.is_day === 1 ? "Day" : "Night"}
                        </p>
                    </div>
                </div>
            </div>
            {/* <div className="bg-gray-200 p-6 rounded-lg shadow-lg max-w-xl mx-auto">
                <h2 className="text-2xl font-bold mb-4 text-center">
                    Weather Information
                </h2>
                <p className={weatherPClassName}>
                    <span className={weatherSpanClassName}>Location:</span>{" "}
                    {location.name}, {location.region}, {location.country}
                </p>
                <p className={weatherPClassName}>
                    <span className={weatherSpanClassName}>Temperature:</span>{" "}
                    {current.temp_f}°F
                </p>
                <p className={weatherPClassName}>
                    <span className={weatherSpanClassName}>Description:</span>{" "}
                    {current.condition.text}
                </p>
                <p className={weatherPClassName}>
                    <span className={weatherSpanClassName}>Humidity:</span>{" "}
                    {current.humidity}%
                </p>
                <p className={weatherPClassName}>
                    <span className={weatherSpanClassName}>Time of day: </span>
                    {current.is_day == 1 ? "Day" : "Night"}
                </p>
            </div>
            <div className="bg-gray-200 p-6 rounded-lg shadow-lg max-w-xl mx-auto mt-4">
                <h3 className="text-xl font-bold mb-4 text-center">
                    Forecast Information
                </h3>
                <p className={weatherPClassName}>
                    <span className={weatherSpanClassName}>
                        Chance of Rain:
                    </span>{" "}
                    {forecast.forecastday[0].day.daily_chance_of_rain}%
                </p>
            </div> */}
        </>
    );
};

export default WeatherUI;
