import './index.scss';
import '../../abstract/_root.scss';


export function SearchContainer() {

    return (
        <div className="search-container">
            <img src="icon-search.svg" alt="search a place" className="search-icon" />
            <input type="text" className="search-input" placeholder="Search for a place..."/>
        </div>
    )
}