import SearchBox from "./SearchBox";
import InfoBox from "./infoBox";
import { useState } from 'react';

export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo]=useState({
        city: "Delhi",
        feelslike: 24.54,
        temp: 30.34,
        tempMin: 30.34,
        tempMax: 30.34,
        humidity: 50,
        weather: "haze",
    });

    let updateInfo =(newInfo)=>{
        setWeatherInfo(newInfo);
    }

    return (
        <div style={{textAlign:"center"}} >
            <h1>WeatherWhiz</h1>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={weatherInfo} />
        </div>
    )
}