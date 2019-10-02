import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges
} from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from "@angular/forms";
import { FieldConfig } from '../../models/products.model';
import { Router } from '@angular/router';

@Component({
  exportAs: "dynamicForm",
  selector: "dynamic-form",
  template: `
  <form class="dynamic-form" [formGroup]="form" (submit)="onSubmit($event)">
  <ng-container *ngFor="let field of fields;" dynamicField [field]="field" [group]="form">
  </ng-container>
  <div class="demo-full-width margin-top" [formGroup]="group">
  <button type="submit" mat-raised-button color="primary">Submit</button>
  </div>
  </form>
  `,
  styles: []
})
export class DynamicFormComponent implements OnInit, OnChanges {
  @Input() fields: FieldConfig[] = [];

  @Output() submit: EventEmitter<any> = new EventEmitter<any>();

  form: FormGroup;

  get value() {
    return this.form.value;
  }
  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.form = this.createControl();
    console.log(this.form);
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes['fields'] && this.fields.length > 0) {
      this.form = this.createControl();
      console.log(this.form);
    }
  }

  onSubmit(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    if (this.form.valid) {
      this.submit.emit(this.form.value);
      this.router.navigate(['']);
    } else {
      this.validateAllFormFields(this.form);
    }
  }

  createControl() {
    const group = this.fb.group({});
    this.fields.forEach(field => {
      const control = this.fb.control(
        '',
        field.mandatory ? Validators.required : null
      );
      group.addControl(field.caption, control);
    });
    return group;
  }


  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      control.markAsTouched({ onlySelf: true });
    });
  }
}
