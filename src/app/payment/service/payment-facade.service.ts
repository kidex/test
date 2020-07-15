import {Injectable} from '@angular/core';
import {PaymentFormService} from './payment-form.service';
import {PaymentApiService} from './payment-api.service';
import {FormGroup} from '@angular/forms';
import {Observable, throwError} from 'rxjs';
import {PostPaymentResponse} from '../model/PostPaymentResponse';

@Injectable({
  providedIn: 'root'
})
export class PaymentFacadeService {

  constructor(
    private paymentFormService: PaymentFormService,
    private paymentApiService: PaymentApiService
  ) {
  }

  getForm(): FormGroup {
    return this.paymentFormService.getForm();
  }

  doPayment(form: FormGroup): Observable<PostPaymentResponse> {
    if (form.valid) {
      return this.paymentApiService.doPayment(form.value);
    }
    return throwError({
      message: 'Payment form is invalid',
      paymentApproved: false,
      paymentDate: new Date()
    });
  }
}
