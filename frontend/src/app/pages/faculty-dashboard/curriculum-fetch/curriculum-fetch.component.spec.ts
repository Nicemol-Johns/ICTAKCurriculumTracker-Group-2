import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurriculumFetchComponent } from './curriculum-fetch.component';

describe('CurriculumFetchComponent', () => {
  let component: CurriculumFetchComponent;
  let fixture: ComponentFixture<CurriculumFetchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurriculumFetchComponent]
    });
    fixture = TestBed.createComponent(CurriculumFetchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
