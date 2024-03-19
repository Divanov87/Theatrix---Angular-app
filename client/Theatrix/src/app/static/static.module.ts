import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsComponent } from './contacts/contacts.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';



@NgModule({
  declarations: [
    ContactsComponent,
    AboutComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule
  ]
})
export class StaticModule { }
