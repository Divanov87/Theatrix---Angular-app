import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPinnedComponent } from './main-pinned.component';

describe('MainPinnedComponent', () => {
  let component: MainPinnedComponent;
  let fixture: ComponentFixture<MainPinnedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainPinnedComponent]
    });
    fixture = TestBed.createComponent(MainPinnedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
