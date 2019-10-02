import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Product, FieldConfig } from '../models/products.model';
import { FormGroup } from "@angular/forms";
import { Validators } from "@angular/forms";
import { DynamicFormComponent } from "../components/dynamic-form/dynamic-form.component";

@Component({
  selector: 'app-prod-insert',
  templateUrl: './prod-insert.component.html',
  styleUrls: ['./prod-insert.component.scss']
})
export class ProdInsertComponent implements OnInit {
  @ViewChild(DynamicFormComponent, { static: true }) form: DynamicFormComponent;
  stateURL: string;
  state: any;
  field: FieldConfig;
  fields: FieldConfig[] = [];
  group: FormGroup;
  constructor(private router: Router, private productService: ProductService) {
    const navigation = this.router.getCurrentNavigation();
    this.state = navigation.extras.state;
    this.stateURL = this.state.definitionUrl;
    console.log(this.state);
  }

  ngOnInit() {
    this.productService.getProductField(this.stateURL).subscribe(prodField => {
      console.log(prodField);
      this.fields = prodField;
      //this.products = product;

    })
  }
  submit(value: any) { }

}
