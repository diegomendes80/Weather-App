import './index.scss';
import {ResultsSection} from '../ResultsSection';
import { HourlySection } from '../HourlySection';


export function MainSection({data, previousData, previousHourData}){
    return(
        <section className="main-section">
            <ResultsSection data={data} previousData={previousData}/>
            <HourlySection previousHourData={previousHourData}></HourlySection>
        </section>
    )
}