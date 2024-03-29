import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ContactsComponent } from './contacts/contacts.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProfileComponent } from './profile/profile.component';
import { SearchComponent } from './search/search.component';

import { HomeRoutingModule } from './home-routing.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    SearchComponent,
    ContactsComponent,
    AboutComponent,
    NotFoundComponent,
    ProfileComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule,
    HomeRoutingModule,
    RouterModule

  ],
})
export class HomeModule { }
