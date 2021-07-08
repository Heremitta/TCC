/* eslint-disable no-unused-vars, @typescript-eslint/no-unused-vars */

import { TestBed, async, inject } from '@angular/core/testing';
import { MessagesService } from './messages.service';

describe('Service: Messages', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MessagesService]
    });
  });

  it('should ...', inject([MessagesService], (service: MessagesService) => {
    expect(service).toBeTruthy();
  }));
});
