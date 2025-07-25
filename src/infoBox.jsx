import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';

export default function InfoBox({info}) {
    const HOT_URL="https://cdn.i-scmp.com/sites/default/files/styles/landscape/public/d8/images/methode/2021/07/02/e5ab3b22-db1b-11eb-9660-0b62a055b768_image_hires_180744.jpg?itok=7nlTg6pc&v=1625220475";
    const COLD_URL="https://plus.unsplash.com/premium_photo-1664301524345-90a694774519?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    const RAIN_URL="https://www.craneww.com/site/assets/files/2374/monsoon-2.1200x800.jpg";

    return (
        <div className="InfoBox">
            <div className="cardContainer">
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={
                            info.humidity>80
                            ? RAIN_URL
                            : info.temp> 15
                            ? HOT_URL
                            : COLD_URL
                        }
                        title="hot weather"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city} {
                            info.humidity>80
                            ? <ThunderstormIcon/>
                            : info.temp> 15
                            ? <SunnyIcon/>
                            : <AcUnitIcon/>
                        }
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                            <p>Temperature= {info.temp}&deg;C</p>
                            <p>Humidity= {info.humidity}</p>
                            <p>Min. Temp= {info.tempMin}&deg;C</p>
                            <p>Max. Temp= {info.tempMax}&deg;C</p>
                            <p>The weather can be described as <i>{info.weather}</i> and feels like {info.feelslike}&deg;C </p>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}