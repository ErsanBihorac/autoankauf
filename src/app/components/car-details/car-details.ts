import { Component, inject } from '@angular/core';
import { Dropdown } from '../dropdown/dropdown';
import { CarService } from '../../services/cars.service';
import { CarMake } from '../../interfaces/car-make.interface';
import { CarModel } from '../../interfaces/car-model.interface';
import { CarGeneration } from '../../interfaces/car-generation.interface';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CarSerie } from '../../interfaces/car-serie.interface';
import { CarTrim } from '../../interfaces/car-trim.interface';
import { CarRequestPayload } from '../../interfaces/car-request-payload.interface';

@Component({
  selector: 'app-car-details',
  imports: [Dropdown, CommonModule, FormsModule],
  templateUrl: './car-details.html',
  styleUrl: './scss/car-details.scss',
})
export class CarDetails {
  carService = inject(CarService);
  carMakes: CarMake[] = [];
  carModels: CarModel[] = [];
  carGenerations: CarGeneration[] = [];
  carSeries: CarSerie[] = [];
  carTrims: CarTrim[] = [];
  mileage = '';
  vin = '';
  fullName = '';
  email = '';
  fuelType = '';
  fuelOptions = ['Benzin', 'Diesel', 'Hybrid', 'Elektro', 'LPG', 'CNG'];
  submitting = false;
  selectedMakeIndex: number | null = null;
  selectedModelIndex: number | null = null;
  selectedGenerationIndex: number | null = null;
  selectedSeriesIndex: number | null = null;
  selectedTrimIndex: number | null = null;

  get canSubmit(): boolean {
    const mileageValue = String(this.mileage).trim();
    const vinValue = String(this.vin).trim();
    const emailValue = String(this.email).trim();
    const mileageValid = /^\d{1,6}$/.test(mileageValue);
    const vinValid = /^\d{17}$/.test(vinValue);
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue);
    return (
      this.selectedMakeIndex !== null &&
      this.selectedModelIndex !== null &&
      this.selectedGenerationIndex !== null &&
      this.selectedSeriesIndex !== null &&
      this.selectedTrimIndex !== null &&
      mileageValid &&
      vinValid &&
      this.fuelType.trim().length > 0 &&
      this.fullName.trim().length > 0 &&
      emailValid
    );
  }

  ngOnInit() {
    this.carService.getCarMakes().subscribe((data) => {
      this.carMakes = data;

      this.carModels = [];
      this.carGenerations = [];
      this.carSeries = [];
      this.carTrims = [];
      this.selectedMakeIndex = null;
      this.selectedModelIndex = null;
      this.selectedGenerationIndex = null;
      this.selectedSeriesIndex = null;
      this.selectedTrimIndex = null;
    });
  }

  setCarModel(index: number){
    this.selectedMakeIndex = index;
    const modelsArray = this.carMakes[index].models;
    this.carModels = modelsArray ?? []

    this.carGenerations = [];
    this.carSeries = [];
    this.carTrims = [];
    this.selectedModelIndex = null;
    this.selectedGenerationIndex = null;
    this.selectedSeriesIndex = null;
    this.selectedTrimIndex = null;
  }

  setCarGeneration(index: number) {
    this.selectedModelIndex = index;
    const generationsArray = this.carModels[index].generations;
    this.carGenerations = generationsArray ?? [];

    this.carSeries = [];
    this.carTrims = [];
    this.selectedGenerationIndex = null;
    this.selectedSeriesIndex = null;
    this.selectedTrimIndex = null;
  }

  setCarSeries(index: number){
    this.selectedGenerationIndex = index;
    const seriesArray = this.carGenerations[index].series;
    this.carSeries = seriesArray ?? [];

    this.carTrims = [];
    this.selectedSeriesIndex = null;
    this.selectedTrimIndex = null;
  }

  setCarTrims(index: number){
    this.selectedSeriesIndex = index;
    const trimsArray = this.carSeries[index].trims;
    this.carTrims = trimsArray ?? [];
    this.selectedTrimIndex = null;
  }

  setCarTrimIndex(index: number){
    this.selectedTrimIndex = index;
  }

  submit() {
    if (!this.canSubmit || this.submitting) {
      return;
    }

    const mileageValue = String(this.mileage).trim();
    const vinValue = String(this.vin).trim();
    const emailValue = String(this.email).trim();

    const make = this.selectedMakeIndex !== null ? this.carMakes[this.selectedMakeIndex] : null;
    const model = this.selectedModelIndex !== null ? this.carModels[this.selectedModelIndex] : null;
    const generation = this.selectedGenerationIndex !== null ? this.carGenerations[this.selectedGenerationIndex] : null;
    const series = this.selectedSeriesIndex !== null ? this.carSeries[this.selectedSeriesIndex] : null;
    const trim = this.selectedTrimIndex !== null ? this.carTrims[this.selectedTrimIndex] : null;

    if (!make || !model || !generation || !series || !trim) {
      return;
    }

    const payload: CarRequestPayload = {
      carMake: make.name,
      carModel: model.name,
      carGeneration: generation.name,
      carSerie: series.name,
      carTrim: trim.name,
      carMileage: Number(mileageValue),
      carFuelType: this.fuelType.trim(),
      vin: vinValue,
      customerName: this.fullName.trim(),
      customerMail: emailValue,
    };

    this.submitting = true;
    this.carService.submitCarRequest(payload).subscribe({
      next: () => {
        this.submitting = false;
      },
      error: () => {
        this.submitting = false;
      },
    });
  }
}
