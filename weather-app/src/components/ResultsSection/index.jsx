import './index.scss';
import { Banner } from '../Banner';
import { Parameter } from '../Parameter';
import { DailySection } from '../DailySection';

export function ResultsSection({data, previousData}){

    return (
        <div className="results">
            <Banner city={data.city} country={data.country} date={data.date} temperature={data.temperature} condition={data.condition} />
            <Parameter data={data}/>
            <DailySection PreviousData={previousData}/>
        </div>
    )

}