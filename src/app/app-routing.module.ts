import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './error/error404/error404.component';
import { StoreComponent } from './store/store.component';
import { AdminComponent } from './admin/admin/admin.component';
import { AddProductComponent } from './admin/add-product/add-product.component';
import { ProductListComponent } from './admin/product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
  {path:"404", component:Error404Component},
  {path:"store", component:StoreComponent},
  {path:"admin", component:AdminComponent},
  {path:"add", component:AddProductComponent},
  {path:"list", component:ProductListComponent},
  {path:"product", component:ProductDetailsComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
