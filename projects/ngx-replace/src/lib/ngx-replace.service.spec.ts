import { TestBed } from '@angular/core/testing';

import { NgxReplaceService } from './ngx-replace.service';

describe('NgxReplaceService', () => {
  let service: NgxReplaceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxReplaceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
