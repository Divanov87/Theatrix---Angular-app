import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TheaterComponent } from './theater/theater.component';
import { ConcertsComponent } from './concerts/concerts.component';
import { SearchComponent } from './search/search.component';
import { EventsComponent } from './events/events.component';
import { DetailsComponent } from './details/details.component';



@NgModule({
  declarations: [
    TheaterComponent,
    ConcertsComponent,
    SearchComponent,
    EventsComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [

  ]
})
export class EventsModule { }
