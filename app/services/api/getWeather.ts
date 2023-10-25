import WeatherData, {Coord} from '../../types/weather';
import api from './axios';

export const getWeather = async ({lat, lon}: Coord): Promise<WeatherData> =>
  await api.get('/forecast', {params: {lat: lat, lon: lon}}).then(response => {
    return response.data;
  });

export const getBackgroundImg = (main: string) => {
  switch (main) {
    case 'Atmosphere':
      return ['#797C87', '#9EA4A9', '#A8B1B5'];
    case 'Clear':
      return ['#FFE28F', '#FEBD56', '#FF9354'];
    case 'Clouds':
      return ['#D8C1C2', '#BAB0C4', '#7482B4'];
    case 'Drizzle':
      return ['#5493B2', '#7EA8BF', '#A7BBC9'];
    case 'Rain':
      return ['#2D5171', '#3F4775', '#48437B'];
    case 'Snow':
      return ['#ACBCCD', '#ACBCCD', '#EADBD4'];
    case 'Thunderstorm':
      return ['#944372', '#CC597B', '#FC7283'];
    default:
      return ['#153E66', '#6EBEF3', '#C1E3FE'];
  }
};
