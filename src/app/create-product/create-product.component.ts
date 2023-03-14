import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductService } from '../product.service';
import { CreateProduct } from '../model/createProduct';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent {

  constructor(
    private productService: ProductService,
    private router: Router
    ) {}

  profileForm = new FormGroup({
    productName: new FormControl(''),
    productImage: new FormControl(''),
    existInventaryQty: new FormControl(''),
    existUnitPrice: new FormControl(''),
  });
  onSubmit() {
    let newProduct: CreateProduct = {
      productName:this.profileForm.value.productName as string,
      productImage:this.profileForm.value.productImage as string,
      existInventaryQty:this.profileForm.value.existInventaryQty as string,
      existUnitPrice:this.profileForm.value.existUnitPrice as string
    };
    this.productService.createUpdateProduct(0, newProduct).subscribe( (data:any) => {
      console.log(data);
      this.router.navigate(['products']);
    });
  }

}
