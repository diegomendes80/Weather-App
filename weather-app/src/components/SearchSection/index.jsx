import './index.scss';
import { SearchContainer } from '../SearchContainer';
import '../../abstract/_root.scss';

export function SearchSection() {
  return (
    <section className='search-section'>
        <h1>How's the sky looking today?</h1>
        <div>
            <SearchContainer></SearchContainer>
            <button className="search-btn">Search</button>
        </div>
        
    </section>
  )
}