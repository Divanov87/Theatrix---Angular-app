import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterListComponent } from './filter-list/filter-list.component';
import { EventCardComponent } from './event-card/event-card.component';
import { ErrorComponent } from './error/error.component';
import { SoldButtonComponent } from './sold-button/sold-button.component';
import { SliderComponent } from './slider/slider.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { BadgeComponent } from './badge/badge.component';
import { EventMetaComponent } from './event-meta/event-meta.component';
import { LoaderComponent } from './loader/loader.component';
import { EventsRoutingModule } from '../events/events-routing.module';



@NgModule({
  declarations: [
    FilterListComponent,
    EventCardComponent,
    ErrorComponent,
    SoldButtonComponent,
    SliderComponent,
    ButtonsComponent,
    BadgeComponent,
    EventMetaComponent,
    LoaderComponent,
  ],
  imports: [
    CommonModule,
    EventsRoutingModule,
  ],
  exports: [
    EventCardComponent,
    LoaderComponent,
  ]
})
export class SharedModule { }
