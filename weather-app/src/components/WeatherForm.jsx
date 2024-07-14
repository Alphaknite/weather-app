import React from "react";

const WeatherForm = ({ handleSubmit, handleInputChange, place }) => {
    return (
        <div className="flex justify-center p-6">
            <form onSubmit={handleSubmit}>
                <input
                    value={place}
                    className="border border-gray-400 rounded-l px-4 py-2 w-64"
                    placeholder="Enter a place/zip code"
                    onChange={handleInputChange}
                />
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r ml-2"
                    onClick={handleSubmit}
                    type="Submit"
                >
                    Get Weather
                </button>
            </form>
        </div>
    );
};

export default WeatherForm;
