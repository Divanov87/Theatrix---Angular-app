import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtaFormComponent } from './cta-form.component';

describe('CtaFormComponent', () => {
  let component: CtaFormComponent;
  let fixture: ComponentFixture<CtaFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CtaFormComponent]
    });
    fixture = TestBed.createComponent(CtaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
