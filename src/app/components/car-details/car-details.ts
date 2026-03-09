import { Component, inject } from '@angular/core';
import { Dropdown } from '../dropdown/dropdown';
import { CarService } from '../../services/cars.service';
import { DropdownOption } from '../../interfaces/dropdown-option.interface';

@Component({
  selector: 'app-car-details',
  imports: [Dropdown],
  templateUrl: './car-details.html',
  styleUrl: './scss/car-details.scss',
})
export class CarDetails {
  carService = inject(CarService);
  carMakes: DropdownOption[] = [];
  carModel: DropdownOption[] = [];

  ngOnInit() {
    this.carService.getCarMakes().subscribe((data) => {
      this.carMakes = data;
    });
  }
}
