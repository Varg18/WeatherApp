import { Component } from '@angular/core'
import { WeatherService } from '../weather.service'
import { faCloud } from '@fortawesome/free-solid-svg-icons'

@Component({
	selector: 'app-weather',
	templateUrl: './weather.component.html',
	styleUrl: './weather.component.sass',
})
export class WeatherComponent {
	logo = faCloud
	weatherData: Object[] = []

	constructor(private readonly weatherService: WeatherService) {}

	getWeather(city: string) {
		this.weatherService.getWeather(city).subscribe((data) => {
			this.weatherData.push(data)
		})
	}

	hasBookmarks() {
		return this.weatherData.length > 0
	}
}
