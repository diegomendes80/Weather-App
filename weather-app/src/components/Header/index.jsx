import {MenuDrop} from '../MenuDrop';
import './index.scss';

export function Header() {

    return (

        <header className="header">
            <img src="logo.svg" alt="units logo" className="header__logo"/>
            {/* <MenuDrop list={['Home', 'About', 'Contact']}></MenuDrop> */}
        </header>
        
    )
}