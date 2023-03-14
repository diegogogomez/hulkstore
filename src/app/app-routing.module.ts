import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { AddInventaryComponent } from './add-inventary/add-inventary.component';

const routes: Routes = [
  { path: 'create-product', component: CreateProductComponent },
  { path: 'product-inflow/:id', component: AddInventaryComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'home/:id', component: HomeComponent },
  { path: '**', redirectTo: 'products' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
