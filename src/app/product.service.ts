import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, share } from 'rxjs/operators';
import { Product, FieldConfig} from './models/products.model';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseUrl: string = "https://ds-ecom.azurewebsites.net/products";
  constructor(private httpClient: HttpClient) { }


  getProductList(): Observable<Product[]>{
    return this.httpClient.get(this.baseUrl).pipe(map((res: Product[]) =>{
     return res;
    }));
  }

  getProductField(url:string): Observable<FieldConfig[]>{
    return this.httpClient.get(url).pipe(map((res: FieldConfig[]) =>{
     return res;
    }));
  }
}


