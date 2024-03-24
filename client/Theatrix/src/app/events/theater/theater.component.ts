import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { IEvent } from '../../interfaces/event';


@Component({
  selector: 'app-theater',
  templateUrl: './theater.component.html',
  styleUrls: ['./theater.component.css']
})
export class TheaterComponent implements OnInit {
theaters: IEvent[] | null = [];
    isLoading: boolean = true;
  
    constructor(private api: ApiService) {}
  
    ngOnInit(): void {
      this.api.getTheaterEvents().subscribe((theater) => {
        console.log(theater);
        this.theaters = theater;
  
        setTimeout(() => {
          this.isLoading = false;
        }, 1000);
      });
    }
  }
  