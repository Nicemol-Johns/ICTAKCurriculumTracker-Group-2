import { TestBed } from '@angular/core/testing';

import { ChatsBackendServicesService } from './chats-backend-services.service';

describe('ChatsBackendServicesService', () => {
  let service: ChatsBackendServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChatsBackendServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
