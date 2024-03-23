import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainEventsComponent } from './main-events.component';

describe('MainEventsComponent', () => {
  let component: MainEventsComponent;
  let fixture: ComponentFixture<MainEventsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainEventsComponent]
    });
    fixture = TestBed.createComponent(MainEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
