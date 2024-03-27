import { Component, OnInit, Renderer2 } from '@angular/core';
import { ApiService } from '../../api.service';
import { IEvent } from '../../interfaces/event';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  events: IEvent[] | null = [];
  isLoading: boolean = true;

  constructor(private api: ApiService, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.api.getAllEvents().subscribe((events) => {
      console.log(events);
      this.events = events;

      setTimeout(() => {
        this.isLoading = false;
      }, 1000);
    });

    const searchInput = document.getElementById('search-input');
    if (searchInput) {
      this.renderer.selectRootElement(searchInput).focus();
    }
  }
}

