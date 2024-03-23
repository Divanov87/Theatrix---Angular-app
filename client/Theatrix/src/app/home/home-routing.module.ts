import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ProfileComponent } from './profile/profile.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
      
            { path: 'search', component: SearchComponent },
            { path: 'profile', component: ProfileComponent },
            { path: 'contacts', component: ContactsComponent, },
            { path: 'about', component: AboutComponent },
        
  ]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }
