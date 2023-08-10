import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingFacultyComponent } from './pending-faculty.component';

describe('PendingFacultyComponent', () => {
  let component: PendingFacultyComponent;
  let fixture: ComponentFixture<PendingFacultyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PendingFacultyComponent]
    });
    fixture = TestBed.createComponent(PendingFacultyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
