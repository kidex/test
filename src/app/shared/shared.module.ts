import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DisplayErrorHandlerComponent} from './display-error-handler/display-error-handler.component';
import {MatInputModule} from '@angular/material';


@NgModule({
  declarations: [
    DisplayErrorHandlerComponent
  ],
  imports: [
    CommonModule,
    MatInputModule
  ],
  exports: [
    DisplayErrorHandlerComponent
  ]
})
export class SharedModule {
}
