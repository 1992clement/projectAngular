export class Forecast {
    dt: number;
    main: object;
    weather: Weather[];
    clouds: object;
    wind: object;
    rain: object;
    sys: object;
    dt_txt: string;
}

class Weather {
    description: string;
    icon: string;
    id: number;
    main: string;
}
