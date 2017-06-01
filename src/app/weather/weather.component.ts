import {Component, OnInit} from '@angular/core';
import {MeteoService} from './meteo.service';
import {Forecast} from './forecast';
import {WeatherApiResponse} from './weather-api-response';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

@Component({
    selector: 'app-weather',
    templateUrl: './weather.component.html',
    styleUrls: ['./weather.component.css'],
    providers: [MeteoService]
})
export class WeatherComponent implements OnInit {
    forecasts: Forecast[] = [];
    forecast = {};
    cityName = '';
    time = new Date;
    oldDate = null;
    oldForecast = {};
    date = new Date();

    constructor(private meteoService: MeteoService,
                private route: ActivatedRoute,
                private location: Location) {
    }

    /**
     * Get params from url
     */
    ngOnInit(): void {
        this.time = this.meteoService.changeFormat(this.route.snapshot.params['event']);
        this.route.params
            .switchMap((params: Params) => this.meteoService.getWeatherFor(params['city']))
            .subscribe(results => this.setDataForCity(results));
    }

    goBack(): void {
        this.location.back();
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
