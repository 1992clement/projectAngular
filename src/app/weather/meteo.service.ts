import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {WeatherApiResponse} from './weather-api-response';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class MeteoService {
    private apiKey = 'c5cf4e853a245cc5a56459b4d11ef2d5';
    private apiUrl = 'http://api.openweathermap.org/data/2.5/forecast';

    constructor(private http: Http) {
    }

    /**
     * Get the weather API response for a specific location.
     * @param cityname
     * @return {Promise<any>|Promise<any>}
     */
    getWeatherFor(cityname: string): Promise<WeatherApiResponse> {
        const url = this.buildUrl(this.apiUrl, this.apiKey, cityname);
        return this.http.get(url)
            .toPromise()
            .then(response => response.json() as WeatherApiResponse)
            .catch(this.handleError);
    }

    /**
     * Build the API url to call
     * @param apiUrl
     * @param apiKey
     * @param query
     * @return {string}
     */
    buildUrl(apiUrl: string, apiKey: string, query: string): string {
        return apiUrl + '?q=' + query + '&APPID=' + apiKey + '&units=metric';
    }

    private handleError(error: any): Promise<any> {
        // console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

    changeFormat(date: string): Date{
        let newDate = new Date(date.replace("T", " "));
        return newDate;
    }
}
