import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainServiceComponent } from './main-service/main-service.component';
import { MainPinnedComponent } from './main-pinned/main-pinned.component';
import { MainEventsComponent } from './main-events/main-events.component';
import { CtaFormComponent } from './cta-form/cta-form.component';
import { MainTopComponent } from './main-top/main-top.component';
import { SharedModule } from '../shared/shared.module';
import { MainComponent } from './main/main.component';
import { MainRatedComponent } from './main-rated/main-rated.component';
import { MainTheaterComponent } from './main-theater/main-theater.component';
import { MainConcertComponent } from './main-concert/main-concert.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MainServiceComponent,
    MainPinnedComponent,
    MainEventsComponent,
    CtaFormComponent,
    MainTopComponent,
    MainComponent,
    MainRatedComponent,
    MainTheaterComponent,
    MainConcertComponent

  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
  ]
})
export class CoreModule { }
