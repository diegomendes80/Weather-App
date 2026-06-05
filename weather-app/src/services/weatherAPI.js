    export async function searchCity(city) {
    const response = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${city}`,
    );

    const data = await response.json();
    return data.results[0];
    }

    export async function getWeatherData(lat, long) {
    const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&current=temperature_2m,apparent_temperature,relative_humidity_2m,wind_speed_10m,precipitation,weather_code`,
    );

    const data = await response.json();
    return data;
    }

    export async function getDailyWeatherData(lat, long){
        const response = await fetch(
        `https://api.open-meteo.com/v1/forecast
        ?latitude=${lat}
        &longitude=${long}
        &current=temperature_2m,apparent_temperature,relative_humidity_2m,wind_speed_10m,precipitation,weather_code
        &daily=weather_code,temperature_2m_max,temperature_2m_min`
        .replace(/\s/g, '')
    );

    const data = await response.json();
    return data;
    }
