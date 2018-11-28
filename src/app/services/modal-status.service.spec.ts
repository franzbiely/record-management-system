import { TestBed } from '@angular/core/testing';

import { ModalStatusService } from './modal-status.service';

describe('ModalStatusService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ModalStatusService = TestBed.get(ModalStatusService);
    expect(service).toBeTruthy();
  });
});
