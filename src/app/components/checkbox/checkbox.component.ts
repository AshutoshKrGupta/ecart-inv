import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FieldConfig } from '../../models/products.model';
@Component({
  selector: "app-checkbox",
  template: `
<div class="demo-full-width margin-top" [formGroup]="group" >
<mat-checkbox [formControlName]="field.caption">{{field.caption}}</mat-checkbox>
<ng-container ngProjectAs="mat-error">
<mat-error *ngIf="group.get(field.caption).hasError('required')">{{field.validationMessage}}</mat-error>
</ng-container>
</div>
`,
  styles: []
})
export class CheckboxComponent implements OnInit {
  field: FieldConfig;
  group: FormGroup;
  constructor() {}
  ngOnInit() {}
}
