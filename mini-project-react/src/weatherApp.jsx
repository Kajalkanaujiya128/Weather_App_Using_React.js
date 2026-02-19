import SearchBox from "./searchBox";
import InfoBox from "./infoBox";
import { useState } from "react";
export default function WeatherApp(){
 
 const [loading, setLoading] = useState(false);


const [weatherInfo,setWeatherInfo] = useState({
city:"Wonderland" , 
feelsLike: 24.84,
humidity: 77,
temp: 14.05,
tempMax: 14.05,
tempMin: 14.05,
weather: "mist"
    });
    let updateInfo=(newInfo) =>{
   setWeatherInfo(newInfo);
     setLoading(false);
    }
    return(
        <div style={{textAlign:"center"}}>
            {/* <h1>Weather App By Delta</h2> */}
            <h1>Weather Forecast App</h1>
<p style={{color:"light-blue"}}>Search Weather By City Name.......</p>
            <SearchBox updateInfo={updateInfo} setLoading={setLoading}/>
              {loading && <p>Loading...</p>} 
            <InfoBox info={weatherInfo}/>
        </div>
    )
}