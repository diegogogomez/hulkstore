import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AddInventaryProduct } from '../model/addInventaryProduct';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add-inventary',
  templateUrl: './add-inventary.component.html',
  styleUrls: ['./add-inventary.component.css']
})
export class AddInventaryComponent {

  constructor(
    public productService: ProductService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  public addInventaryForm = new FormGroup({
    inflowInventaryQty: new FormControl(''),
    inflowUnitPrice: new FormControl(''),
  });

  public onSubmit() {
    console.log(this.addInventaryForm.value);
    
    let addInventaryProduct: AddInventaryProduct = {
      inflowInventaryQty:Number(this.addInventaryForm.value.inflowInventaryQty as string),
      inflowUnitPrice:Number(this.addInventaryForm.value.inflowUnitPrice as string)
    };
    
    this.activatedRoute.params.subscribe(s => {
      console.log(s);
      this.productService.addInventaryProduct(Number(s['id']), addInventaryProduct).subscribe( (data:any) => {
        console.log(data);
        this.router.navigate(['products']);
      });
    });
  }

}
