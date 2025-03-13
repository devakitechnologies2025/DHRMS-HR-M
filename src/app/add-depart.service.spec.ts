import { TestBed } from '@angular/core/testing';

import { AddDepartService } from './add-depart.service';

describe('AddDepartService', () => {
  let service: AddDepartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddDepartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
