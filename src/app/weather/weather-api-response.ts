import {Forecast} from './forecast';
import {City} from '../city';

/**
 * Define what a valid Response from Weather API should contain
 */
export class WeatherApiResponse {
    city: City;
    cnt: number;
    cod: string;
    list: Forecast[];
}
