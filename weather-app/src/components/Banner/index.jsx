import './index.scss';


export function Banner({city, country, date, temperature, condition}){

    let weatherURLIcon;

    switch(condition){
        case 'sunny':
            weatherURLIcon = "icon-sunny.webp";
            break;

        case 'cloudy':
            weatherURLIcon = "icon-cloudy.webp";
            break;

        case 'rainy':
            weatherURLIcon = "icon-rainy.webp";
            break;

        case 'snowy':
            weatherURLIcon = "icon-snowy.webp";
            break;
        case 'stormy':
            weatherURLIcon = "icon-stormy.webp";
            break;

        case 'foggy':
            weatherURLIcon = "icon-foggy.webp";
            break;

        case 'drizzle':
            weatherURLIcon = "icon-drizzle.webp";
            break;
        default:
            weatherURLIcon = "icon-sunny.webp";
    }

    return (
        <div className="banner">
            <div className="banner__location-infos">
                <p className="city">{city}, {country}</p>
                <p className="date">{date}</p>
            </div>

            <div className="banner__location-weather">
               
                  <img src={weatherURLIcon} alt="clima" className="weather-icon" /> 
                <h2 className="temperature">{temperature}°</h2>
            </div>
        </div>
    )
}