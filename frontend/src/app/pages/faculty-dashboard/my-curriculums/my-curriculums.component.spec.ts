import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCurriculumsComponent } from './my-curriculums.component';

describe('MyCurriculumsComponent', () => {
  let component: MyCurriculumsComponent;
  let fixture: ComponentFixture<MyCurriculumsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyCurriculumsComponent]
    });
    fixture = TestBed.createComponent(MyCurriculumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
