import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { authfacultyGuard } from './authfaculty.guard';

describe('authfacultyGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => authfacultyGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
