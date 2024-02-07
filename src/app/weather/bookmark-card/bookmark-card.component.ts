import { Component, Input } from '@angular/core'
import { DateTime } from 'luxon'
import {
	faBolt,
	faCloud,
	faCloudRain,
	faCloudShowersHeavy,
	faSmog,
	faSnowflake,
	faSun,
	faTornado,
	faWater,
	faWind,
	faBookmark as bootmarkTrue,
} from '@fortawesome/free-solid-svg-icons'
import { faBookmark as boormarkFalse } from '@fortawesome/free-regular-svg-icons'

@Component({
	selector: 'app-bookmark-card',
	templateUrl: './bookmark-card.component.html',
	styleUrl: './bookmark-card.component.sass',
})
export class BookmarkCardComponent {
	@Input() weather!: object

	sun = faSun
	squall = faWind
	tornado = faTornado
	semiClearSky = faWater
	cloud = faCloud
	dust = faSmog
	snow = faSnowflake
	drizzle = faCloudRain
	rain = faCloudShowersHeavy
	thunderstorm = faBolt

	getWeatherTemp() {
		if (this.weather === null) return null
		//@ts-ignore
		return Math.round(this.weather.main.temp)
	}

	getWeatherDesk() {
		if (this.weather === null) return null
		const desk = (deskNoFormatted: string) => {
			let deskFormatted =
				deskNoFormatted[0].toUpperCase() + deskNoFormatted.slice(1)
			return deskFormatted
		}
		//@ts-ignore
		return desk(this.weather.weather[0].description)
	}

	getWeatherPressure() {
		if (this.weather === null) return null
		//@ts-ignore
		return (this.weather.main.pressure / 1.33).toFixed()
	}

	getWeatherSunsetTime() {
		if (this.weather === null) return null
		//@ts-ignore
		let sunsetSecondsUTC = this.weather.sys.sunset

		let date = DateTime.fromSeconds(sunsetSecondsUTC).toFormat('HH:mm')
		return date
	}

	getIcon() {
		//@ts-ignore
		let id: number = this.weather.weather[0].id
		switch (true) {
			case id === 800:
				return this.sun
			case id === 771:
				return this.squall
			case id === 781:
				return this.tornado
			case [701, 711, 721, 741].includes(id):
				return this.semiClearSky
			case [731, 751, 761, 771].includes(id):
				return this.dust
			case Math.floor(id / 100) === 8:
				return this.cloud
			case Math.floor(id / 100) === 6:
				return this.snow
			case Math.floor(id / 100) === 5:
				return this.rain
			case Math.floor(id / 100) === 3:
				return this.drizzle
			case Math.floor(id / 100) === 2:
				return this.thunderstorm

			default:
				return this.cloud
		}
	}

	getCityName() {
		if (this.weather === null) return null
		//@ts-ignore
		return this.weather.name
	}
}
