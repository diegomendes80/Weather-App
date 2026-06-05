    import './index.scss';
    import {ResultsSection} from '../ResultsSection';
    import { HourlySection } from '../HourlySection';


    export function MainSection({data, previousData, previousHourData}){
        return(
            <section className="main-section">
                {/* repassa os dados recebidos dos estados para os componentes visuais */}
                <ResultsSection data={data} previousData={previousData}/>
                <HourlySection previousHourData={previousHourData}></HourlySection>
            </section>
        )
    }