import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./searchBox.css";
import { useState } from 'react';
export default function SearchBox({updateInfo,setLoading}) {
    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="8ce9091b7b9879f07c2df1054ea50de7";

    let getWeatherInfo =async  () =>{
       try{       
        let response=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`

        );
        let jsonResponse=await response.json();

        let result= {
            city: city,
            temp: jsonResponse.main.temp,
            tempMin:jsonResponse.main.temp_min,
            tempMax:jsonResponse.main.temp_max,
            humidity:jsonResponse.main.humidity,
            feelsLike:jsonResponse.main.feels_like,
            weather:jsonResponse.weather[0].description,
          };
        console.log(result);
        return result;
       }catch(error){
        throw error;
       }
    };
    let [city,setCity]=useState("");
    let [error,setError]=useState(false);
    let handleChange =(event) =>{
        setCity(event.target.value);
    }
    let handleSubmit =async (event) =>{
      try{     
        event.preventDefault();
            setError(false);
    setLoading(true); 
        console.log(city);
        // setCity("");
       let newInfo=await getWeatherInfo();
       updateInfo(newInfo);
        setCity("");
      }catch(error){
            setLoading(false);
         setError(true);
      }

    };
    return (
        <div className='searchBox'>
       
        <form onSubmit={handleSubmit}>
            <TextField id='city' label=' Enter City name.....' variant='outlined' value={city}
            onChange={handleChange}   InputProps={{
    style: { color: "black" }
            }}
      sx={{
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "white"
      },
      "&:hover fieldset": {
        borderColor: "black"
      },
      "&.Mui-focused fieldset": {
        borderColor: "sky-blue"
      }
    }
  }}
    />
     <br/><br/><br/><br/>
            <Button variant="contained" type='submit'>Search </Button>
            {error && <p style={{color:"red"}}>No such place exists</p>}
        </form>
        </div>
    )
}