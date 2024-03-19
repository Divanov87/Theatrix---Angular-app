import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CatalogComponent } from './catalog/catalog.component';
import { TheaterComponent } from './theater/theater.component';
import { ConcertsComponent } from './concerts/concerts.component';
import { DetailsComponent } from './details/details.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  {
    path: 'events',
    children: [
      { path: '', component: CatalogComponent },
      { path: 'theater', component: TheaterComponent },
      { path: 'concerts', component: ConcertsComponent },
      { path: 'add', component: AddComponent },
      { path: 'edit', component: EditComponent },
      { path: 'details', component: DetailsComponent },
    ]
  }
]




@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }
