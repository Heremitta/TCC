/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UserDbService } from './UserDb.service';

describe('Service: LocalDb', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserDbService]
    });
  });

  it('should ...', inject([UserDbService], (service: UserDbService) => {
    expect(service).toBeTruthy();
  }));
});
