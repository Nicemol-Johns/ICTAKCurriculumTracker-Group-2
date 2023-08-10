import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequirementformComponent } from './requirementform.component';

describe('RequirementformComponent', () => {
  let component: RequirementformComponent;
  let fixture: ComponentFixture<RequirementformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RequirementformComponent]
    });
    fixture = TestBed.createComponent(RequirementformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
