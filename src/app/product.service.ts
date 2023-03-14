import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddInventaryProduct } from './model/addInventaryProduct';
import { BuyProduct } from './model/buyProduct';
import { CreateProduct } from './model/createProduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  configUrl = 'http://localhost:8080';
  // configUrl = 'http://104.199.108.132:8081';
  constructor(private http: HttpClient) { }

  productMovements(idProduct: Number): Observable<any> {
    return this.http.get<any>(this.configUrl + `/store/product/api/v1/product/${idProduct}`);
  }
  

  products(): Observable<any> {
    return this.http.get<any>(this.configUrl + "/store/product/api/v1/product");
  }
  

  createUpdateProduct(idProduct: Number, body: CreateProduct): Observable<any> {
    var body2 = {
      "productName":body.productName,
      "productImage":body.productImage,
      "newInventaryProduct": {
          "existInventaryQty": body.existInventaryQty,
          "existUnitPrice": body.existUnitPrice,
          "existTotalPrice": null
      }
    };
    return this.http.put<any>(this.configUrl +`/store/product/api/v1/product/${idProduct}`, body2);
  }
  

  buyProduct(idProduct: Number, body: BuyProduct): Observable<any> {
    var body2 = {
      "outflowInventaryProduct": {
          "outflowInventaryQty": body.outflowInventaryQty,
          "outflowUnitPrice": null,
          "outflowTotalPrice": null
      }
    };
    return this.http.put<any>(this.configUrl +`/store/product/api/v1/product-outflow/${idProduct}`, body2);
  }


  addInventaryProduct(idProduct: Number, body: AddInventaryProduct): Observable<any> {
    var body2 = {
      "inflowInventaryProduct": {
          "inflowInventaryQty": body.inflowInventaryQty,
          "inflowUnitPrice": body.inflowUnitPrice,
          "inflowTotalPrice": null
      }
    };
    return this.http.put<any>(this.configUrl +`/store/product/api/v1/product-inflow/${idProduct}`, body2);
  }
  


}
