import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FieldConfig } from '../../models/products.model';
@Component({
  selector: "app-input",
  template: `
<mat-form-field class="demo-full-width" [formGroup]="group">
<mat-label>{{field.caption}}</mat-label>
<input matInput [formControlName]="field.caption" [placeholder]="field.defaultValue" [type]="field.inputType">
<ng-container ngProjectAs="mat-error">
<mat-error *ngIf="group.get(field.caption).hasError('required')">{{field.validationMessage}}</mat-error>
</ng-container>
</mat-form-field>
`,
  styles: []
})
export class InputComponent implements OnInit {
  field: FieldConfig;
  group: FormGroup;
  constructor() {}
  ngOnInit() {}
}
