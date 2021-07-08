/* eslint-disable no-unused-vars, @typescript-eslint/no-unused-vars */

import { TestBed, async, inject } from '@angular/core/testing';
import { SignInService } from './signIn.service';

describe('Service: SignIn', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SignInService]
    });
  });

  it('should ...', inject([SignInService], (service: SignInService) => {
    expect(service).toBeTruthy();
  }));
});
