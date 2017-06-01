import {Component, OnInit} from '@angular/core';
import {MeteoService} from './meteo.service';
import {Forecast} from './forecast';
import {WeatherApiResponse} from './weather-api-response';

@Component({
    selector: 'app-weather',
    templateUrl: './weather.component.html',
    styleUrls: ['./weather.component.css'],
    providers: [MeteoService]
})
export class WeatherComponent implements OnInit {
    title = 'app works!';
    weather = 'app works!';
    forecasts: Forecast[] = [];
    forecast = {};
    cityName = 'Landeleau';
    time = new Date('2017-06-01T19:22:00');
    oldDate = null;
    oldForecast = {};
    date = new Date();

    constructor(private meteoService: MeteoService) {
    }

    ngOnInit(): void {
        this.meteoService.getWeatherFor(this.cityName).then(results => this.setDataForCity(results));
    }

    /**
     * retrieve Data from the weather service response
     * @param data
     */
    setDataForCity(data: WeatherApiResponse): void {
        this.cityName = data.city.name;
        this.forecasts = data.list as Forecast[];

        /**
         * Compare the date and hour of the show to the forecast
         */
        for (let i = 0; i < this.forecasts.length; i++) {
            this.date = new Date(this.forecasts[i].dt_txt);
            if (this.oldDate != null) {
                if (this.time.getTime() <= this.date.getTime() && this.time.getTime() > this.oldDate.getTime()) {
                    this.forecast = this.oldForecast;
                }
            } else {
                if (this.time.getTime() <= this.date.getTime()) {
                    this.forecast = this.forecasts[i];
                } else if (this.date.getTime() < this.time.getTime()) {
                    this.forecast = {};
                }
            }
            this.oldDate = new Date(this.forecasts[i].dt_txt);
            this.oldForecast = this.forecasts[i];
        }
    }
}
