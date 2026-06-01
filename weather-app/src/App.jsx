import { useState } from 'react'
import './abstract/_root.scss';
import './abstract/_var.scss';
import './app.scss';
import './abstract/_root.scss';
import {Header} from './components/Header';
import { SearchSection } from './components/SearchSection';
import { MainSection } from './components/MainSection';

function App() {
  
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
      <MainSection data={data}/>

    </>
  )
}

export default App
