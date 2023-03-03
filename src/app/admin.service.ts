import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Admin } from './admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  user!: Admin;

  constructor(private http: HttpClient) { }


  getAdminUser(){
    return this.http.get<Admin>("http://localhost:3004/admin");
  }

  updatePassword(ad: Admin){
    return this.http.put<Admin>("http://localhost:3004/admin/", ad);
  }


  
}
