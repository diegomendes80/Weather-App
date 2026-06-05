import './index.scss';
import '../../abstract/_root.scss';
import { useRef } from 'react';

//aqui, finalmente usamos a função handle la do app (não confundir com a handle desse arquivo). Usamos um useRef pra monitorar
//e capturar em tempo real o valor digitado no input de pesquisa, o qual será passado para o handle la do app que ai sim 
//fará a chamaada da api pra pegar os dados
export function SearchContainer({onSearch}) {

    const inputRef = useRef();

    function handleSearch (){
        onSearch(inputRef.current.value)
    }

    return (
        <div className="search-container">
            <img src="icon-search.svg" alt="search a place" className="search-icon" />
            <input ref={inputRef} type="text" className="search-input" placeholder="Search for a place..."/>
            {/* ao click do botaop chamamos a handleSearch aqui desse componente, que por sua vez passa o valor do input 
            para a função onSearch que é a handle la do app que pega os dados da api */}
            <button onClick={handleSearch} className="search-btn">Search</button>
        </div>
    )
}