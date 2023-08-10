import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterShortComponent } from './footer-short.component';

describe('FooterShortComponent', () => {
  let component: FooterShortComponent;
  let fixture: ComponentFixture<FooterShortComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterShortComponent]
    });
    fixture = TestBed.createComponent(FooterShortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
