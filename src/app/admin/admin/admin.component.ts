import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Admin } from 'src/app/admin';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  
  isvalid: boolean=false;
  form!: FormGroup;
  form2!: FormGroup;


  constructor(private admins: AdminService, private torstr: ToastrService, private router: Router){}
  ngOnInit(): void {
    
    this.form = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', Validators.required)
      
     });
    this.form2 = new FormGroup({
      username: new FormControl('', [Validators.required]),

      password: new FormControl('', Validators.required),
      newpassword: new FormControl('', Validators.required)
      
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
     
      this.admins.getAdminUser().subscribe(
        (opt:Admin) =>{
            if(this.form.value.username === opt.username){
              if(this.form.value.password === opt.password){
                this.isvalid=true;
                this.router.navigate(['list']);
                this.torstr.success("Logged in");
                sessionStorage.setItem("name", this.form.value.username);

              }else{
                this.torstr.error("Incorrect Password");
              }
            }else{
              this.torstr.error("Incorrect UserID");
              // this.isvalid=false;
            }
        }
      );


    }
    // console.log(this.form.value);
    
  }



  changePassword(){
    if(this.form2.invalid){
      this.torstr.error("Please enter Valid Details");
    }else{
      
     
      this.admins.getAdminUser().subscribe(
        (opt:Admin) =>{
            if(this.form2.value.username === opt.username){
              if(this.form2.value.password === opt.password){
                const ad: Admin={
                  id:this.form2.value.id,
                  username:this.form2.value.username,
                  password:this.form2.value.newpassword,
                }
                opt.password=this.form2.value.password;

                this.admins.updatePassword(ad).subscribe();
                // console.log(ad);
                // console.log(this.form2.value);

                this.torstr.success("Password changed");
              }else{
                this.torstr.error("Incorrect Password");
              }
            }else{
              this.torstr.error("Incorrect UserID");
              // this.isvalid=false;
            }
        }
      );
    }
  }

// http://localhost:3004/admin/
// {
//   "username": "Jeni",
//   "password": "Pass"
// }



}
