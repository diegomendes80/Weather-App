export async function searchCity(city){
    const response = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${city}`
    )

    const data = await response.json()
    return data.results[0]
}

export async function getWeatherData(lat, long){
    const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&current=temperature_2m`
    );
    
    return response.json()
}