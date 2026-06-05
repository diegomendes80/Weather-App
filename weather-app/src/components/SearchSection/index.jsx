import './index.scss';
import { SearchContainer } from '../SearchContainer';
import '../../abstract/_root.scss';


// Aqui, dentro da search section recebemos a função handle passada lá no app e passamos ela pro  serch container, que é 
//quem possui o input de fato
export function SearchSection({onSearch}) {
  return (
    <section className='search-section'>
        <h1>How's the sky looking today?</h1>
        <div>
            <SearchContainer onSearch={onSearch}></SearchContainer>
            
        </div>
        
    </section>
  )
}