import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../../api.service';
import { IEvent } from '../../interfaces/event';

@Component({
  selector: 'app-main-pinned',
  templateUrl: './main-pinned.component.html',
  styleUrls: ['./main-pinned.component.css']
})
export class MainPinnedComponent implements OnInit {
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
        console.error('Error fetching event:', error);
        this.isLoading = false;
      }
    });
  }
}