import './index.scss';

export function Parameter({data}){

    return(
        <div className="container">
            <div className="feels">
                <p>Feels Like</p>
                <p className="feels-temperature">{data.feels}°</p>
            </div>

            <div className="humidity">
                <p>Humidity</p>
                <p className="humidity-percentage">{data.humidity}%</p>
            </div>

            <div className="wind">
                <p>Wind</p>
                <p className="wind-speed">{data.wind} km/h</p>
            </div>

            <div className="precipitation">
                <p>Precipitation</p>
                <p className="precipitation-amount">{data.precipitation} mm</p>
            </div>
        </div>
    )
}