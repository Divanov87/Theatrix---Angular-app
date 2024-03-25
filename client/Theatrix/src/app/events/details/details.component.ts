import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../api.service';
import { IEventDetails } from 'src/app/interfaces/event-details';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  eventsData: IEventDetails[] | null = [];
  isLoading: boolean = true;

  constructor(private route: ActivatedRoute, private api: ApiService) {}

  ngOnInit(): void {
    const _id = this.route.snapshot.paramMap.get('id') ?? '';
    this.api.getEventDetails(_id).subscribe((eventsData) => {
      this.eventsData = eventsData;
      console.log(eventsData);
      this.isLoading = false;
    });
}
}
