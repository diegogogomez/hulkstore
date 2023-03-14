import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BuyProduct } from '../model/buyProduct';
import { Product } from '../model/product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  productos: Product[] = [];
  constructor(private productService: ProductService, public router: Router){}

  ngOnInit(): void {
    this.productService.products().subscribe( (data:any) => {
      this.productos = data['data'];
      console.log("productos", this.productos);
      console.log("data", data);
    });
  }

  public navigateTo(idProduct: Number) {
    this.router.navigate(['home', idProduct])
  }

  public buyProduct(idProduct: Number) {
    console.log(idProduct);
    let buyProduct: BuyProduct = {outflowInventaryQty: 1};
    this.productService.buyProduct(idProduct, buyProduct).subscribe( (data:any) => {
      console.log(data);
      this.router.navigate(['products'])
    }, err => {
      console.log(err);
      if(err.status == 400 && err.error.code == "DAE011") {
        window.alert(err.error.message);
      }
    });
  }

  public addInventary(productId: Number) {
    console.log(productId);
    this.router.navigate(['product-inflow', productId]);
  }

}
