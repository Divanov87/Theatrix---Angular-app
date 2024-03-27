import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainTheaterComponent } from './main-theater.component';

describe('MainTheaterComponent', () => {
  let component: MainTheaterComponent;
  let fixture: ComponentFixture<MainTheaterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainTheaterComponent]
    });
    fixture = TestBed.createComponent(MainTheaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
