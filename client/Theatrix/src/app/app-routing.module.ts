import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './core/main/main.component';
import { ConcertsComponent } from './events/concerts/concerts.component';
import { TheaterComponent } from './events/theater/theater.component';
import { DetailsComponent } from './events/details/details.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { AddComponent } from './events/add/add.component';
import { NotFoundComponent } from './home/not-found/not-found.component';
import { SearchComponent } from './home/search/search.component';
import { ProfileComponent } from './home/profile/profile.component';
import { ContactsComponent } from './home/contacts/contacts.component';
import { AboutComponent } from './home/about/about.component';


const routes: Routes = [

  { path: '', component: MainComponent },

  { path: 'search', component: SearchComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'contacts', component: ContactsComponent, },
  { path: 'about', component: AboutComponent, },
  
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
