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
  isLoading: boolean = true;

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getTheatrixEvents().subscribe({
      next: (event) => {
        this.events = event;
        setTimeout(() => {
          this.isLoading = false;
        }, 10000);
        console.log(event);
      },
      error: (error) => {
        console.error('Error fetching event:', error);
        this.isLoading = false;
      }
    });
  }
}