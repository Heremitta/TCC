/* eslint-disable no-unused-vars, @typescript-eslint/no-unused-vars */

import { TestBed, async, inject } from '@angular/core/testing';
import { ChatService } from './chat.service';

describe('Service: Chat', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChatService]
    });
  });

  it('should ...', inject([ChatService], (service: ChatService) => {
    expect(service).toBeTruthy();
  }));
});
