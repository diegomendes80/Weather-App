import { useState } from 'react'
import './abstract/_root.scss';
import './abstract/_var.scss';
import './app.scss';
import './abstract/_root.scss';
import {Header} from './components/Header';
import { SearchSection } from './components/SearchSection';
import { MainSection } from './components/MainSection';
import { getDailyWeatherData, getWeatherData, searchCity } from './services/weatherAPI';

function App() {
  
    //declaro um usestate que será reponsável por guardar o estado dos dados de clima
    const [weatherData, setWeatherData] = useState(null);
    const [dailyWeatherData, setDailyWeatherData] = useState(null);

    //uma função assincrona que usaraá as funções da API pra pegar e formatar os dados
    //necesssários para preencher todos os componentes
    async function handleSearch(city){
        const cityData = await searchCity(city);

        const weather = await getWeatherData(cityData.latitude, cityData.longitude);
        // faço a chamada igual a anterior mas usando a função que pega os dados de dias anteriores
        const dailyWeather = await getDailyWeatherData(cityData.latitude, cityData.longitude); 


        const formattedWeather = {
        city: cityData.name,
        country: cityData.country,

        temperature: weather.current.temperature_2m,
        feels: weather.current.apparent_temperature,
        humidity: weather.current.relative_humidity_2m,
        wind: weather.current.wind_speed_10m,
        precipitation: weather.current.precipitation,

        condition: weather.current.weather_code,

        date: new Date().toLocaleDateString()
    };

    //memso funcionamento da anterior
     const formattedDailyWeather =
        dailyWeather.daily.time.map((date, index) => ({
            day: new Date(date).toLocaleDateString('en-US', {
                weekday: 'short'
            }),

            condition:
                dailyWeather.daily.weather_code[index],

            temperature:
                dailyWeather.daily.temperature_2m_max[index],

            feels:
                dailyWeather.daily.temperature_2m_min[index]
        }));

        setWeatherData(formattedWeather); //atualiza o state com os dados formatatos 
        setDailyWeatherData(formattedDailyWeather); //mesmo funcionamento
    }

  
  const PreviousData = [
    { day: 'Mon', condition: 'sunny',   temperature: 28, feels: 26 },
    { day: 'Tue', condition: 'cloudy',  temperature: 22, feels: 20 },
    { day: 'Wed', condition: 'rainy',   temperature: 18, feels: 15 },
    { day: 'Thu', condition: 'stormy',  temperature: 15, feels: 12 },
    { day: 'Fri', condition: 'drizzle', temperature: 19, feels: 17 },
    { day: 'Sat', condition: 'foggy',   temperature: 21, feels: 19 },
    { day: 'Sun', condition: 'snowy',   temperature: 3,  feels: -1 },
];

const previousHourData = {
    Mon: [
        { hour: '3 PM',  condition: 'sunny',   temperature: 28 },
        { hour: '4 PM',  condition: 'sunny',   temperature: 27 },
        { hour: '5 PM',  condition: 'overcast',  temperature: 26 },
        { hour: '6 PM',  condition: 'overcast',  temperature: 25 },
        { hour: '7 PM',  condition: 'overcast',  temperature: 24 },
        { hour: '8 PM',  condition: 'fog',   temperature: 23 },
        { hour: '9 PM',  condition: 'fog',   temperature: 22 },
        { hour: '10 PM', condition: 'fog',   temperature: 21 },
    ],
    Tue: [
        { hour: '3 PM',  condition: 'overcast',  temperature: 22 },
        { hour: '4 PM',  condition: 'overcast',  temperature: 21 },
        { hour: '5 PM',  condition: 'rain',   temperature: 20 },
        { hour: '6 PM',  condition: 'rain',   temperature: 19 },
        { hour: '7 PM',  condition: 'rain',   temperature: 18 },
        { hour: '8 PM',  condition: 'rain',   temperature: 18 },
        { hour: '9 PM',  condition: 'overcast',  temperature: 17 },
        { hour: '10 PM', condition: 'overcast',  temperature: 16 },
    ],
    Wed: [
        { hour: '3 PM',  condition: 'rain',   temperature: 18 },
        { hour: '4 PM',  condition: 'rain',   temperature: 17 },
        { hour: '5 PM',  condition: 'storm',  temperature: 16 },
        { hour: '6 PM',  condition: 'storm',  temperature: 15 },
        { hour: '7 PM',  condition: 'storm',  temperature: 15 },
        { hour: '8 PM',  condition: 'rain',   temperature: 14 },
        { hour: '9 PM',  condition: 'rain',   temperature: 13 },
        { hour: '10 PM', condition: 'fog',   temperature: 13 },
    ],
    Thu: [
        { hour: '3 PM',  condition: 'storm',  temperature: 15 },
        { hour: '4 PM',  condition: 'storm',  temperature: 14 },
        { hour: '5 PM',  condition: 'storm',  temperature: 14 },
        { hour: '6 PM',  condition: 'rain',   temperature: 13 },
        { hour: '7 PM',  condition: 'rain',   temperature: 12 },
        { hour: '8 PM',  condition: 'rain',   temperature: 12 },
        { hour: '9 PM',  condition: 'overcast',  temperature: 11 },
        { hour: '10 PM', condition: 'overcast',  temperature: 10 },
    ],
    Fri: [
        { hour: '3 PM',  condition: 'drizzle', temperature: 19 },
        { hour: '4 PM',  condition: 'drizzle', temperature: 18 },
        { hour: '5 PM',  condition: 'overcast',  temperature: 18 },
        { hour: '6 PM',  condition: 'overcast',  temperature: 17 },
        { hour: '7 PM',  condition: 'fog',   temperature: 17 },
        { hour: '8 PM',  condition: 'fog',   temperature: 16 },
        { hour: '9 PM',  condition: 'fog',   temperature: 15 },
        { hour: '10 PM', condition: 'overcast',  temperature: 15 },
    ],
    Sat: [
        { hour: '3 PM',  condition: 'fog',   temperature: 21 },
        { hour: '4 PM',  condition: 'fog',   temperature: 20 },
        { hour: '5 PM',  condition: 'overcast',  temperature: 20 },
        { hour: '6 PM',  condition: 'overcast',  temperature: 19 },
        { hour: '7 PM',  condition: 'overcast',  temperature: 18 },
        { hour: '8 PM',  condition: 'fog',   temperature: 18 },
        { hour: '9 PM',  condition: 'fog',   temperature: 17 },
        { hour: '10 PM', condition: 'fog',   temperature: 16 },
    ],
    Sun: [
        { hour: '3 PM',  condition: 'snow',   temperature: 3  },
        { hour: '4 PM',  condition: 'snow',   temperature: 2  },
        { hour: '5 PM',  condition: 'snow',   temperature: 2  },
        { hour: '6 PM',  condition: 'snow',   temperature: 1  },
        { hour: '7 PM',  condition: 'overcast',  temperature: 1  },
        { hour: '8 PM',  condition: 'overcast',  temperature: 0  },
        { hour: '9 PM',  condition: 'fog',   temperature: 0  },
        { hour: '10 PM', condition: 'fog',   temperature: -1 },
    ],
};

  const mockData = {
    city: 'São Paulo',
    country: 'Brasil',
    date: 'Tuesday, April 20, 2024',
    temperature: 25,
    condition: 'sunny',
    feels: 20,
    humidity: 60,
    wind: 10 ,
    precipitation: 0

  }

  return (
    <>

      <Header></Header>
      {/* passamos a função handle anterior para o parametro onSearch para a seção que conterá o container com
      o input de pesquisa */}
      <SearchSection onSearch={handleSearch}></SearchSection> 

      {/* Na seção main, aquela que exibe os dados de fato, são passados o resultado atual do state com os dados de clima
      no parâmetro data (mockData serve como um estado default até o usuario pesquisar uma cidade), bem como os dados de dias e horas anteriores */}
      <MainSection data={weatherData || mockData} previousData={dailyWeatherData || PreviousData} previousHourData={previousHourData}/>

    </>
  )
}

export default App
