import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor( private http: HttpClient) {

  }
  readonly BaseURI = environment.Web_API;
 
  Login(data:any) {
    
    let newdata= JSON.stringify (data)
    return this.http.post(this.BaseURI + 'User/Login',String(newdata)  );
  }
  GetMaharajaPasswordUser(data:any) {
    let newdata= JSON.stringify (data)
    
    return this.http.post(this.BaseURI + 'User/GetMaharajaPassword',newdata);
  }
  GetMaharajaPasswordAdmin(data:any) {
    let newdata= JSON.stringify (data)
   
    return this.http.post(this.BaseURI + 'Admin/GetMaharajaPassword',newdata);
  }
  ChangeMaharajaPassword(data:any) {
    let newdata= JSON.stringify (data)
    
    return this.http.post(this.BaseURI + 'Admin/ChangeMaharajaPassword',newdata);
  }
  
  ChangeUserCredaintial(data:any) {
    let newdata= JSON.stringify (data)
    
    return this.http.post(this.BaseURI + 'Admin/ChangeUserCredaintial',newdata);
  }
  ChangeAdminCredaintial(data:any) {
    let newdata= JSON.stringify (data)
    
    return this.http.post(this.BaseURI + 'Admin/ChangeAdminCredaintial',newdata);
  }
}