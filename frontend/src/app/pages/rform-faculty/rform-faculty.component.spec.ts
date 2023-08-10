import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RformFacultyComponent } from './rform-faculty.component';

describe('RformFacultyComponent', () => {
  let component: RformFacultyComponent;
  let fixture: ComponentFixture<RformFacultyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RformFacultyComponent]
    });
    fixture = TestBed.createComponent(RformFacultyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
