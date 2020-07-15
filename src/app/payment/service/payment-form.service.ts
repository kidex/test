import {Injectable} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class PaymentFormService {

  constructor(private formBuilder: FormBuilder) {
  }

  public getForm(): FormGroup {
    return this.formBuilder.group({
      creditCardNumber: ['', [Validators.required]],
      cardHolder: ['', [Validators.required]],
      expirationDate: ['', [Validators.required]],
      securityCode: ['', [Validators.minLength(3), Validators.maxLength(3), Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      amount: ['', [Validators.required, Validators.min(1)]]
    });
  }
}
