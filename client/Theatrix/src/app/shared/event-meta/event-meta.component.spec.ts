import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventMetaComponent } from './event-meta.component';

describe('EventMetaComponent', () => {
  let component: EventMetaComponent;
  let fixture: ComponentFixture<EventMetaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventMetaComponent]
    });
    fixture = TestBed.createComponent(EventMetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
