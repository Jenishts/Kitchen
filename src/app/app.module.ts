import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { StoreComponent } from './store/store.component';
import { AdminComponent } from './admin/admin/admin.component';
import { ProductListComponent } from './admin/product-list/product-list.component';
import { AddProductComponent } from './admin/add-product/add-product.component';
import { Error404Component } from './error/error404/error404.component';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { SearchProductPipe } from './search-product.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    StoreComponent,
    AdminComponent,
    ProductListComponent,
    AddProductComponent,
    Error404Component,
    ProductDetailsComponent,
    SearchProductPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(), 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
