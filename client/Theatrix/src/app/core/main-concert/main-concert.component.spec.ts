import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainConcertComponent } from './main-concert.component';

describe('MainConcertComponent', () => {
  let component: MainConcertComponent;
  let fixture: ComponentFixture<MainConcertComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainConcertComponent]
    });
    fixture = TestBed.createComponent(MainConcertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
