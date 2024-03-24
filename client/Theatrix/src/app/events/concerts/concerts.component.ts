import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { IEvent } from '../../interfaces/event';

@Component({
  selector: 'app-concerts',
  templateUrl: './concerts.component.html',
  styleUrls: ['./concerts.component.css']
})
export class ConcertsComponent implements OnInit {
concerts: IEvent[] | null = [];
  isLoading: boolean = true;

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getConcertEvents().subscribe((concert) => {
      console.log(concert);
      this.concerts = concert;

      setTimeout(() => {
        this.isLoading = false;
      }, 1000);
    });
  }
}
