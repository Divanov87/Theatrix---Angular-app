import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainRatedComponent } from './main-rated.component';

describe('MainRatedComponent', () => {
  let component: MainRatedComponent;
  let fixture: ComponentFixture<MainRatedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainRatedComponent]
    });
    fixture = TestBed.createComponent(MainRatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
