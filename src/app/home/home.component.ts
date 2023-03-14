import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from 'src/app/model/product';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  productos: Product[] = [];

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute
  ){}

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(s => {      
      this.productService.productMovements(s['id']).subscribe( (data:any) => {
        this.productos = data['data'];
        console.log("productos", this.productos);
      });
    });

  }

}
