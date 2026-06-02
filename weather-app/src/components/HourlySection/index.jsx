import { useState } from 'react';
import './index.scss';

export function HourlySection({ previousHourData }) {
    const days = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
    const [selectedDay, setSelectedDay] = useState('Mon');

    const hours = previousHourData[selectedDay] || [];

    return (
        <section className="hourly-section">
            <div className="hourly-header">
                <p>Hourly forecast</p>
                <select onChange={(e) => setSelectedDay(e.target.value)} value={selectedDay}>
                    {days.map(day => (
                        <option key={day} value={day}>{day}</option>
                    ))}
                </select>
            </div>

            <div className="hour-container">
                {hours.map((item, index) => (
                    <div className="hour-card" key={index}>
                        <img src={`icon-${item.condition}.webp`} alt={item.condition} />
                        <p>{item.hour}</p>
                        <p>{item.temperature}°</p>
                    </div>
                ))}
            </div>
        </section>
    )
}