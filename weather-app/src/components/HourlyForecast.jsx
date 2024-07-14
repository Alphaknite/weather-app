import React from "react";

const HourlyForecast = ({ hourly }) => {
    return (
        <div className="p-4 mb-4">
            
            <div className="flex overflow-x-scroll example">
                {hourly.map((hour) => (
                    <div key={hour.time_epoch} className="text-center min-w-[100px] mx-2">
                        <p>{new Date(hour.time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
                        <img src={hour.condition.icon} alt={hour.condition.text} className="mx-auto w-12 h-12" />
                        <p>{hour.temp_f}°</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HourlyForecast;
