import {
  ComponentFactoryResolver,
  ComponentRef,
  Directive,
  Input,
  OnInit,
  ViewContainerRef,
  OnChanges,
  SimpleChanges
} from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FieldConfig } from '../../models/products.model';
import { InputComponent } from "../input/input.component";
import { CheckboxComponent } from "../checkbox/checkbox.component";

const componentMapper = {
  input: InputComponent,
  checkbox: CheckboxComponent
};
@Directive({
  selector: "[dynamicField]"
})
export class DynamicFieldDirective implements OnInit, OnChanges {
  @Input() field: FieldConfig;
  @Input() group: FormGroup;
  type: string;
  componentRef: any;
  constructor(
    private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef
  ) { }
  ngOnInit() {
    if (this.field.type == 'bool') {
      this.type = 'checkbox';
    }
    else {
      this.type = 'input'
    }
    const factory = this.resolver.resolveComponentFactory(
      componentMapper[this.type]
    );
    this.componentRef = this.container.createComponent(factory);
    this.componentRef.instance.field = this.field;
    this.componentRef.instance.group = this.group;
  }
  ngOnChanges(changes: SimpleChanges) {
  }

}
