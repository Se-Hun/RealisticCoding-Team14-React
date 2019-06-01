import React from 'react';
import Icon from './Icon';

const API_WEATHER = 'http://demo6468405.mockable.io/weather-crawlers/current-weathers/by-city-name';

class TodayWeather extends React.Component {
  state = {
    weather: null
  };

  async componentDidMount() {
    // const { cityId } = this.props.match.params;
    const cityId = 'Daejeon';
    const api = `${API_WEATHER}/${cityId}`;

    const weather = await fetch(api)
      .then(res => res.json())
      .then(data => data);

    this.setState({
      weather
    });
  }

  render() {
    const { cityId } = this.props.match.params;
    const { weather } = this.state;

    if (!weather) {
      return <div>Loading...</div>;
    }

    const celsius = (weather.main.temp - 273.15).toFixed(2); // kelvin to celsius
    const weatherMain = weather.weather[0].main;
    //const iconId = weather.weather[0].id;
    const wind = weather.wind.speed;
    const clouds = weather.clouds.all;

    return (
      <div className="weather-today">

        <div className="weather-today-meta">
          <h2 className="weather-city">{cityId}</h2>
          <h3 className="weather-main">{weatherMain}</h3>
        </div>
          <br/>
          <div className="weather-temp">Celsius : {celsius}°</div>
          <br/>
          <div className="weather-wind">Wind Speed : {wind}</div>
          <br/>
          <div className="weather-clouds">Clouds : {clouds}</div>
          <br/>
      </div>
    );
  }
}

export default TodayWeather;
