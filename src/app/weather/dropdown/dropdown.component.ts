import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'
import cityList from '../../cities.json'

@Component({
	selector: 'app-dropdown',
	templateUrl: './dropdown.component.html',
	styleUrl: './dropdown.component.sass',
})
export class DropdownComponent implements OnInit {
	stateForm!: FormGroup

	constructor(private fb: FormBuilder) {
		this.InitForm()
	}

	showDropDown = false
	cities = cityList

	@ViewChild('city') cityNameInput: any

	InitForm(): FormGroup {
		return (this.stateForm = this.fb.group({
			search: null,
		}))
	}

	ngOnInit(): void {}

	toggleDropDown() {
		this.showDropDown = !this.showDropDown
	}

	selectCity(value: any) {
		this.stateForm.patchValue({ search: value.city })
		this.showDropDown = false
	}

	getSearchCity() {
		return this.stateForm.value.search
	}

	clear() {
		this.cityNameInput.nativeElement.value = ''
	}

	@Output() cityItemEvent = new EventEmitter<string>()
	cityItem(value: string) {
		this.cityItemEvent.emit(value)
	}
}
