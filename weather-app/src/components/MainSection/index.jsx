import './index.scss';
import {ResultsSection} from '../ResultsSection';
import {Parameter} from '../Parameter';


export function MainSection({data, previousData}){
    return(
        <section className="main-section">
            <ResultsSection data={data} previousData={previousData}/>
            
        </section>
    )
}