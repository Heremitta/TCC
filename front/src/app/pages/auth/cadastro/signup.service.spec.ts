/* eslint-disable no-unused-vars, @typescript-eslint/no-unused-vars */

import { TestBed, async, inject } from '@angular/core/testing';
import { SignupService } from './signup.service';

describe('Service: Signup', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SignupService],
    });
  });

  it('should ...', inject([SignupService], (service: SignupService) => {
    expect(service).toBeTruthy();
  }));
});
