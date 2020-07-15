import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Payment} from '../model/Payment';
import {environment} from '../../../environments/environment';
import {PostPaymentResponse} from '../model/PostPaymentResponse';

@Injectable({
  providedIn: 'root'
})
export class PaymentApiService {

  constructor(
    private httpClient: HttpClient
  ) {}

  doPayment(payment: Payment): Observable<PostPaymentResponse> {
    return this.httpClient.post<PostPaymentResponse>(environment.apiUrl, payment);
  }
}
