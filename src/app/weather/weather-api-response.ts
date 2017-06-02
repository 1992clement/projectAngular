import {Forecast} from './forecast';

/**
 * Define what a valid Response from Weather API should contain
 */
export class WeatherApiResponse {
    city: City;
    cnt: number;
    cod: string;
    list: Forecast[];
}

class City {
    coord: object;
    contry: string;
    id: number;
    name: string;
}
