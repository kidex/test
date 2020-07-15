import {TestBed} from '@angular/core/testing';

import {PaymentFacadeService} from './payment-facade.service';

describe('PaymentFacadeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PaymentFacadeService = TestBed.get(PaymentFacadeService);
    expect(service).toBeTruthy();
  });
});
