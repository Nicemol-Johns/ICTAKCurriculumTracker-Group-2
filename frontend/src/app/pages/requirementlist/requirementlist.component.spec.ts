import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequirementlistComponent } from './requirementlist.component';

describe('RequirementlistComponent', () => {
  let component: RequirementlistComponent;
  let fixture: ComponentFixture<RequirementlistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RequirementlistComponent]
    });
    fixture = TestBed.createComponent(RequirementlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
