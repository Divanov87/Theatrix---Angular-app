import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { env } from 'src/environments/environment.development';
import { IEvent } from './interfaces/event';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getAllEvents() {
    const { URL } = env;
    return this.http.get<IEvent[]>(`${URL}/events`);
  }
  getTheaterEvents() {
    const { URL } = env;
    return this.http.get<IEvent[]>(`${URL}/events/theater`);
  }
  getConcertEvents() {
    const { URL } = env;
    return this.http.get<IEvent[]>(`${URL}/events/concerts`);
  }






 
}
