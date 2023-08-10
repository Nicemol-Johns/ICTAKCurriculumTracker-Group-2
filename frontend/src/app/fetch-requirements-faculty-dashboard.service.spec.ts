import { TestBed } from '@angular/core/testing';

import { FetchRequirementsFacultyDashboardService } from './fetch-requirements-faculty-dashboard.service';

describe('FetchRequirementsFacultyDashboardService', () => {
  let service: FetchRequirementsFacultyDashboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchRequirementsFacultyDashboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
