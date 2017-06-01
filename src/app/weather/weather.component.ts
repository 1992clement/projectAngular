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
    cityName = 'Landeleau';

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
        console.log(this.forecasts);
    }
}
