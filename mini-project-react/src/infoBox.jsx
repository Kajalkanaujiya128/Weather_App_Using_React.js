import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./infoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';

export default function InfoBox ({info}){
const INIT_URL="https://images.unsplash.com/photo-1598178335029-735919d79943?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1pc3QlMjB3ZWF0aGVyfGVufDB8fDB8fHww";
const HOT_URL= "https://images.unsplash.com/photo-1546274527-9327167dc1f5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGhvdCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
const COLD_URL="https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
const RAIN_URL="https://images.unsplash.com/photo-1737472794232-4c8be24ba535?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHJhaW55JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    return(
        <div className="InfoBox">
        {/* <h1>Weather Info - {info.weather}</h1> */}
        <div className="cardContainer">
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 140 }}
      image={
          !info.city
       ? INIT_URL
    :info.humidity> 80
         ?  RAIN_URL
        :info.temp >15 
        ?HOT_URL 
        : COLD_URL
      } 
      title="green iguana"/>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}{
        info.humidity> 80
         ? <ThunderstormIcon/>

        :info.temp >15 
        ? <SunnyIcon/>
        : <AcUnitIcon/>
          }
          </Typography>
        <Typography variant="body2"  color= "text.secondary" component={"div"}>
       <div>Tempreature={info.temp}&deg;C</div>
       <div>Humidity={info.humidity}</div>
       <p>Min Temp={info.tempMin}&deg;C</p>
       <p>Max Temp={info.tempMax}&deg;C</p>
       <p>The weather can be described as <i>{info.weather}</i> and feels like={info.feelsLike}&deg;C</p>
        </Typography>
      </CardContent>
    </Card>
        </div>
        </div>
    )
}