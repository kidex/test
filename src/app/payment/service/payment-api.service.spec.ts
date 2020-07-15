import { TestBed } from '@angular/core/testing';

import { PaymentApiService } from './payment-api.service';

describe('PaymentApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PaymentApiService = TestBed.get(PaymentApiService);
    expect(service).toBeTruthy();
  });
});
