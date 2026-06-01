import "./index.scss";

export function DailySection({ PreviousData }) {
 

  return (
    <section className="daily-section">
      <h2>Daily Forecast</h2>

      <div className="card-container">
        {PreviousData.map((data, index) => {
          let weatherURLIcon;

          switch (data.condition) {
            case "sunny":
              weatherURLIcon = "icon-sunny.webp";
              break;
            case "cloudy":
              weatherURLIcon = "icon-overcast.webp";
              break;
            case "rainy":
              weatherURLIcon = "icon-rain.webp";
              break;
            case "snowy":
              weatherURLIcon = "icon-snow.webp";
              break;
            case "stormy":
              weatherURLIcon = "icon-storm.webp";
              break;
            case "foggy":
              weatherURLIcon = "icon-fog.webp";
              break;
            case "drizzle":
              weatherURLIcon = "icon-drizzle.webp";
              break;
            default:
              weatherURLIcon = "icon-sunny.webp";
          }

          return (
            <div className="card" key={index}>
              <p>{data.day}</p>
              <img src={weatherURLIcon} alt={data.condition} />
              <div>
                <p>{data.temperature}°</p> <p>{data.feels}°</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
