import { TestBed } from '@angular/core/testing';

import { CurriculumQueriesService } from './curriculum-queries.service';

describe('CurriculumQueriesService', () => {
  let service: CurriculumQueriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurriculumQueriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
