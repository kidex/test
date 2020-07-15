import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';
import {PostPaymentResponse} from '../model/PostPaymentResponse';
import {MatSnackBar} from '@angular/material';
import {Router} from '@angular/router';
import {PaymentFacadeService} from '../service/payment-facade.service';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.scss']
})
export class PaymentFormComponent implements OnInit, OnDestroy {
  private destroyed$ = new Subject();
  paymentForm: FormGroup;
  minDate = new Date();

  constructor(
    private paymentFacade: PaymentFacadeService,
    private router: Router,
    private matSnackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.paymentForm = this.paymentFacade.getForm();
  }

  ngOnDestroy(): void {
    this.destroyed$.next('');
  }

  doPayment() {
    this.paymentFacade.doPayment(this.paymentForm)
      .pipe(
        takeUntil(this.destroyed$)
      ).subscribe(
      (res: PostPaymentResponse) => this.handleSuccessPayment(res),
      (err: Error) => this.handleErrorPayment(err));
  }

  private handleSuccessPayment(response: PostPaymentResponse) {
    this.matSnackBar.open(response.message, 'Close', {
      duration: 2000
    });
    this.router.navigateByUrl('');
  }

  private handleErrorPayment(err: Error) {
    this.matSnackBar.open(err.message, 'Close', {
      duration: 2000
    });
  }

}
