/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { NewsapiservicesService } from './newsapiservices.service';

describe('NewsapiservicesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewsapiservicesService]
    });
  });

  it('should ...', inject([NewsapiservicesService], (service: NewsapiservicesService) => {
    expect(service).toBeTruthy();
  }));
});
