import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../models/products.model';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'product-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public products: Product[];
  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit() {
    this.productService.getProductList().subscribe(product => {
      console.log(product);
      this.products = product;
    })
  }
  addProduct(product) {
    const navigationExtras: NavigationExtras = { state: product };
    this.router.navigate(['AddProduct'], navigationExtras);
  }
}
