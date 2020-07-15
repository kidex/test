import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PaymentRoutingModule} from './payment-routing.module';
import {PaymentComponent} from './payment.component';
import {PaymentFormComponent} from './payment-form/payment-form.component';
import {MatButtonModule, MatDatepickerModule, MatInputModule, MatNativeDateModule, MatSnackBarModule} from '@angular/material';
import {PaymentApiService} from './service/payment-api.service';
import {PaymentFormService} from './service/payment-form.service';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {SharedModule} from '../shared/shared.module';
import {PaymentFacadeService} from './service/payment-facade.service';


@NgModule({
  declarations: [PaymentComponent, PaymentFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    PaymentRoutingModule,
    SharedModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatSnackBarModule
  ],
  providers: [
    PaymentApiService,
    PaymentFormService,
    PaymentFacadeService
  ],
})
export class PaymentModule { }
