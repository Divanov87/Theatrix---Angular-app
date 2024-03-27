import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { env } from 'src/environments/environment.development';
import { IEvent } from './interfaces/event';
import { IEventDetails } from './interfaces/event-details';
// import { Observable } from 'rxjs';
// import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) { }

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
   getTheatrixEvents() {
    const { URL } = env;
    return this.http.get<{ [key: number]: IEvent[] }>(`${URL}/`);
  }
  createEvent(_id: string, eventsData: IEvent) {
    const { URL } = env;
    return this.http.post<IEvent>(`${URL}/events/add`, eventsData); 
  }
  editEvent(_id: string, eventsData:IEvent) {
    const { URL } = env;
    return this.http.put<IEvent>(`${URL}/events/${_id}`, eventsData); 
  }
  deleteEvent(_id: string) {
    const { URL } = env;
    return this.http.delete<IEvent>(`${URL}/events/${_id}`); 
  }
  // getTheatrixEvents(): Observable<{ [key: number]: IEvent[] }> {
  //   const { URL } = env;
  //   return this.http.get<{ [key: number]: IEvent[] }>(`${URL}/`);
  //   .pipe(tap(response => console.log('API Response:', response)));
  // }





}
