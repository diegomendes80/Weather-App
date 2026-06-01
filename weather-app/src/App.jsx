import { useState } from 'react'
import './abstract/_root.scss';
import './abstract/_var.scss';
import './app.scss';
import './abstract/_root.scss';
import {Header} from './components/Header';
import { SearchSection } from './components/SearchSection';
import { MainSection } from './components/MainSection';

function App() {
  
  const PreviousData = [
    { day: 'Mon', condition: 'sunny',   temperature: 28, feels: 26 },
    { day: 'Tue', condition: 'cloudy',  temperature: 22, feels: 20 },
    { day: 'Wed', condition: 'rainy',   temperature: 18, feels: 15 },
    { day: 'Thu', condition: 'stormy',  temperature: 15, feels: 12 },
    { day: 'Fri', condition: 'drizzle', temperature: 19, feels: 17 },
    { day: 'Sat', condition: 'foggy',   temperature: 21, feels: 19 },
    { day: 'Sun', condition: 'snowy',   temperature: 3,  feels: -1 },
];

  const data = {
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
      <SearchSection></SearchSection>
      <MainSection data={data} previousData={PreviousData}/>

    </>
  )
}

export default App
