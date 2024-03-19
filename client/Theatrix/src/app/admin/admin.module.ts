import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditEventComponent } from './edit-event/edit-event.component';
import { AddEventComponent } from './add-event/add-event.component';



@NgModule({
  declarations: [
    EditEventComponent,
    AddEventComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
