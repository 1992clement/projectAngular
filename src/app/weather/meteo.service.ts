import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';
import {Forecast} from './forecast';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class MeteoService {
    private apiKey = 'c5cf4e853a245cc5a56459b4d11ef2d5';
    private apiUrl = 'http://api.openweathermap.org/data/2.5/forecast';

    constructor(private http: Http) {
    }

    private getResult(url: string): Promise<string> {
        return new Promise(resolve => {
            setTimeout(self => resolve(location + ' : toto'), 1000);
        });
    }

    getWeatherFor(cityname: string): Promise<any> {
        const url = this.buildUrl(this.apiUrl, this.apiKey, cityname);
        return this.http.get(url)
            .toPromise()
            .catch(this.handleError);
    }

    buildUrl(apiUrl: string, apiKey: string, query: string): string{
        return apiUrl + '?q=' + query + '&APPID=' + apiKey ;
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}
