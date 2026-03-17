import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { DropdownOption } from '../interfaces/dropdown-option.interface';
import { CarRequestPayload } from '../interfaces/car-request-payload.interface';

@Injectable({
  providedIn: 'root',
})

export class CarService {
  private apiUrl = 'http://localhost:8000/api'
  private http = inject(HttpClient);

  private selectedCarMake = new BehaviorSubject<DropdownOption | null>(null);
  public selectedCarMake$ = this.selectedCarMake.asObservable();

  setCarMake(option: DropdownOption) {
    this.selectedCarMake.next(option);
  }

  getCarMakes(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/car-makes/`);
  }

  submitCarRequest(payload: CarRequestPayload): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/send-email/`, payload);
  }
}