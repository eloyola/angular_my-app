import {Component, Input} from '@angular/core';
import { FormGroup } from '@angular/forms';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-datepicker-popup',
  templateUrl: './datepicker-popup.component.html'
})
export class DatepickerPopupComponent {
  model: NgbDateStruct;

  @Input() parentForm: FormGroup;
  @Input() formControlName: String;
  @Input() formLabel: String
}