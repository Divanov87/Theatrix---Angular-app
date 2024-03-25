import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { TheaterComponent } from './theater/theater.component';
import { ConcertsComponent } from './concerts/concerts.component';
import { DetailsComponent } from './details/details.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { CatalogComponent } from './catalog/catalog.component';

import { EventsRoutingModule } from './events-routing.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { QrCodeModule } from 'ng-qrcode';


@NgModule({
  declarations: [
    CatalogComponent,
    TheaterComponent,
    ConcertsComponent,
    DetailsComponent,
    AddComponent,
    EditComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule,
    QrCodeModule,
    EventsRoutingModule,
    RouterModule

  ],
})
export class EventsModule { }
