import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit{
  form!: FormGroup;


  constructor(public ps: ProductService, private torstr: ToastrService, private router: Router) { }


  ngOnInit(): void {



    this.form = new FormGroup({
      No: new FormControl('', [Validators.required]),
      name: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      url: new FormControl('', Validators.required)
        });


    
  }

  get f(){
    return this.form.controls;
    console.log(this.form.value);
  }

  submit(){
    if(this.form.invalid){
      this.torstr.error("Please enter Valid Details");
    }else{
      this.ps.addItem(this.form.value).subscribe();
      this.router.navigateByUrl('list');
      this.torstr.success("Item Added Sucessfully");
    }
    // console.log(this.form.value);
    
  }

  
  

}
