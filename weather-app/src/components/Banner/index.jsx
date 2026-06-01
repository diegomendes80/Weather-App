import './index.scss';


export function Banner(){

    return (
        <div className="banner">
            <div className="banner__location-infos">
                <p className="city">Berlin, Germany</p>
                <p className="date">Monday, October 2, 2026</p>
            </div>

            <div className="banner__location-weather">
                <img src="icon-sunny.webp" alt="clima" className="weather-icon" />
                <h2 className="temperature">20°</h2>
            </div>
        </div>
    )
}