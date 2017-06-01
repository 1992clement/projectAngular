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
        for (let i = 1; i < this.forecasts.length; i++) {
            this.date = new Date(this.forecasts[i].dt_txt);
            if (this.oldDate != null) {
                if (this.date <= this.time && this.date > this.oldDate) {
                    this.forecast = this.forecasts[i];
                }
            } else {
                if (this.date <= this.time) {
                    this.forecast = this.forecasts[i];
                } else {
                }
            }
            this.oldDate = new Date(this.forecasts[i].dt_txt);
        }
        // console.log(this.forecasts);
    }
}
