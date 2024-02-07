import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

@Injectable({
	providedIn: 'root',
})
export class WeatherService {
	apiKey = 'd82e1398e61d981325e45d346f519b3a'
	constructor(private http: HttpClient) {}

	getWeather(city: string) {
		return this.http.get(
			`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${this.apiKey}&units=metric&lang=ru`
		)
	}
}

