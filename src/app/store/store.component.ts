import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit{

  query="";
  items!: Product[];
  currentItem!: Product;
  redirect=true;

  constructor(private ps: ProductService){}



  ngOnInit(): void {
    this.getAll();

    
    
  }

  getAll(){
    this.ps.getAllitems().subscribe(
      opt=>{
        this.items=opt;
      }
    )
  }


 
  pdPage(item:Product){
    
    this.currentItem=item;
    // console.error(this.currentItem);
    this.redirect=false;
  }



}
