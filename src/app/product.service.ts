import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService implements OnInit{

  items!: Product[];

  constructor(private http: HttpClient) { }


  ngOnInit(): void {
    
  }

  getAllitems(){
    return this.http.get<Product[]>("http://localhost:3004/product");
  }

  deleteitem(id:number){
    const url="http://localhost:3004/product/"+id;
    return this.http.delete<Product>(url);
  }

  addItem(item: Product){
    return this.http.post<Product>("http://localhost:3004/product/", item);
  }

}
