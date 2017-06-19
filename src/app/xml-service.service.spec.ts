import { TestBed, inject } from '@angular/core/testing';

import { XmlServiceService } from './xml-service.service';

describe('XmlServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [XmlServiceService]
    });
  });

  it('should ...', inject([XmlServiceService], (service: XmlServiceService) => {
    expect(service).toBeTruthy();
  }));
});
