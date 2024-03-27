import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../../api.service';
import { IEvent } from '../../interfaces/event';

@Component({
  selector: 'app-main-events',
  templateUrl: './main-events.component.html',
  styleUrls: ['./main-events.component.css']
})
export class MainEventsComponent  {
  @Input() events: { [key: string]: IEvent[] } | null = null;
  @Input() eventType: string = '';
  // events: { [key: number]: IEvent[] } | null = null;
  isLoading: boolean = true;

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getTheatrixEvents().subscribe({
      next: (event) => {
        this.events = event;
        this.isLoading = false;
        console.log(event);
      },
      error: (error) => {
        console.error('Error fetching events:', error);
        this.isLoading = false;
      }
    });
  }
}


