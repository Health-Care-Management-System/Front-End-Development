import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  date: Date | undefined;
  available: boolean | undefined;
  constructor() { }
}
