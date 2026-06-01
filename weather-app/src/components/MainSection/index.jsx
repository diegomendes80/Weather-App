import './index.scss';
import {ResultsSection} from '../ResultsSection';
import {Parameter} from '../Parameter';

export function MainSection({data}){
    return(
        <section className="main-section">
            <ResultsSection data={data}/>
            
        </section>
    )
}