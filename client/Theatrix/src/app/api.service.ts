import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { env } from 'src/environments/environment.development';
import { IEvent } from './interfaces/event';
import { IEventDetails } from './interfaces/event-details';

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
  getEventDetails(_id: string) {
    const { URL } = env;
    return this.http.get<IEventDetails[]>(`${URL}/events/${_id}/details`);
  }

  // addEventg(_id: string) {
  //   const { URL } = env;
  //   return this.http.get<IEvent[]>(`${URL}/events/${_id}`);
  // }
  // addEventp(addedEvent: Event, _id: string) {
  //   const { URL } = env;
  //   return this.http.post<IEvent[]>(`${URL}/events/${_id}`, addedEvent);
  // }





 
}
