import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { IEvent } from '../../interfaces/event';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  events: IEvent[] | null = [];
  isLoading: boolean = true;

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getAllEvents().subscribe((events) => {
      console.log(events);
      this.events = events;

      setTimeout(() => {
        this.isLoading = false;
      }, 1000);
    });
  }
}
