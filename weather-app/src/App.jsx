import { useState } from 'react'
import './abstract/_root.scss';
import './abstract/_var.scss';
import './app.scss';
import './abstract/_root.scss';
import {Header} from './components/Header';
import { SearchSection } from './components/SearchSection';

function App() {
  

  return (
    <>

      <Header></Header>
      <SearchSection></SearchSection>

    </>
  )
}

export default App
