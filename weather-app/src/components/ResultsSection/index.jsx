import './index.scss';
import { Banner } from '../Banner';
import { Parameter } from '../Parameter';

export function ResultsSection({data}){

    return (
        <div className="results">
            <Banner city={data.city} country={data.country} date={data.date} temperature={data.temperature} condition={data.condition} />
            <Parameter data={data}/>
        </div>
    )

}