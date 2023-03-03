import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/product';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  items!: Product[];

  constructor(private ps: ProductService, private toastr: ToastrService){}



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


  OnClick(){
    this.toastr.info('Not implemented yet');
  }


  Delete(item: Product){
    const nmessage=item.name + " has been deleted";

    this.ps.deleteitem(item.id).subscribe();

    this.toastr.info(nmessage);
  }

}
