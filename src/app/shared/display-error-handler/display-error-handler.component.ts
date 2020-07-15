import {Component, Input} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-display-error-handler',
  templateUrl: './display-error-handler.component.html',
  styleUrls: ['./display-error-handler.component.scss']
})
export class DisplayErrorHandlerComponent {

  @Input()
  public inputFormControl: FormControl;

}
