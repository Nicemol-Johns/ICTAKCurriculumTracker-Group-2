import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovedFacultyComponent } from './approved-faculty.component';

describe('ApprovedFacultyComponent', () => {
  let component: ApprovedFacultyComponent;
  let fixture: ComponentFixture<ApprovedFacultyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApprovedFacultyComponent]
    });
    fixture = TestBed.createComponent(ApprovedFacultyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
