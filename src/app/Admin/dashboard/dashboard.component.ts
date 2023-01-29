import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/ApiCallService';
import { UserStorage } from 'src/app/model/enum';
import { AlertService } from 'src/app/service/alert.service';
import { StroageService } from 'src/app/service/stroage.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class ADashboardComponent implements OnInit {


  MaharajaCurrentPassword:string='';
  MaharajanewPassword:string='';
  MaharajaConfirmPassword:string='';
  UsernewPassword:string='';
  UserConfirmPassword:string='';
  UsernewName:string='';
  AdminnewPassword:string='';
  AdminConfirmPassword:string='';
  AdminnewName:string='';
  constructor(private _StroageService:StroageService,
    private _ApiService:ApiService,
    private alertService: AlertService,
    private router: Router) { }

  ngOnInit(): void { 
    if(this._StroageService.get(UserStorage.UserName)===null || this._StroageService.get(UserStorage.UserName)===undefined  ){
      this.router.navigateByUrl('');
    }
  }
  onSubmit(){

  }
  GetMaharajaPassword(){
    this.alertService.clear();
    let data ={
      UserName:this._StroageService.get(UserStorage.UserName)?.replace('\"','').replace('\"',''),
      Password:this._StroageService.get(UserStorage.Password)?.replace('\"','').replace('\"','')
    }

    this._ApiService.GetMaharajaPasswordAdmin(data).subscribe(
      (res: any) => {  
        try{
          let temp =JSON.parse(res);
          this.MaharajaCurrentPassword=temp.maharajaPassword;
        }catch{
          this.alertService.error(res);
        }
        }, error => {
          this.alertService.error(error);
           
      });
  }
  logout(){
    localStorage.clear();
    this.router.navigateByUrl('');
  }

  ChangeAdminCredailtail(){
    this.alertService.clear();
    let un ='';
    if(this.AdminnewName!==null && this.AdminnewName!==undefined && this.AdminnewName!==''){
      un=this.AdminnewName;
    }
    if(this.AdminnewPassword===null|| this.AdminnewPassword===undefined|| this.AdminnewPassword===''){
      this.alertService.error('Please enter Admin new password');
      return;
    }
    if(this.AdminConfirmPassword===null|| this.AdminConfirmPassword===undefined|| this.AdminConfirmPassword===''){
      this.alertService.error('Please enter Admin Confirm password');
      return;
    }

    if(this.AdminConfirmPassword!==this.AdminnewPassword){
      this.alertService.error('Both Password does not match');
      return;
    }
    let data ={
      UserName:this._StroageService.get(UserStorage.UserName)?.replace('\"','').replace('\"',''),
      Password:this._StroageService.get(UserStorage.Password)?.replace('\"','').replace('\"',''),
      newPassword:this.AdminnewPassword,
      newName:un
    }

    this._ApiService.ChangeAdminCredaintial(data).subscribe(
      (res: any) => {  
        try{
          this.alertService.success(res);
          this.UsernewPassword='';
          this.UserConfirmPassword='';
          this.UsernewName='';
        }catch{
          this.alertService.error(res);
        }
        }, error => {
          this.alertService.error(error);
           
      });


  }

  ChangeUserCredailtail(){
    this.alertService.clear();
    let un ='';
    if(this.UsernewName!==null && this.UsernewName!==undefined && this.UsernewName!==''){
      un=this.UsernewName;
    }
    if(this.UsernewPassword===null|| this.UsernewPassword===undefined|| this.UsernewPassword===''){
      this.alertService.error('Please enter User new password');
      return;
    }
    if(this.UserConfirmPassword===null|| this.UserConfirmPassword===undefined|| this.UserConfirmPassword===''){
      this.alertService.error('Please enter User Confirm password');
      return;
    }

    if(this.UserConfirmPassword!==this.UsernewPassword){
      this.alertService.error('Both Password does not match');
      return;
    }
    let data ={
      UserName:this._StroageService.get(UserStorage.UserName)?.replace('\"','').replace('\"',''),
      Password:this._StroageService.get(UserStorage.Password)?.replace('\"','').replace('\"',''),
      newPassword:this.UsernewPassword,
      newName:un
    }

    this._ApiService.ChangeUserCredaintial(data).subscribe(
      (res: any) => {  
        try{
          this.alertService.success(res);
          this.UsernewPassword='';
          this.UserConfirmPassword='';
          this.UsernewName='';
        }catch{
          this.alertService.error(res);
        }
        }, error => {
          this.alertService.error(error);
           
      });


  }

  ChangeMaharajaPassword(){
    this.alertService.clear();
    if(this.MaharajanewPassword===null|| this.MaharajanewPassword===undefined|| this.MaharajanewPassword===''){
      this.alertService.error('Please enter Maharaja new password');
      return;
    }
    if(this.MaharajaConfirmPassword===null|| this.MaharajaConfirmPassword===undefined|| this.MaharajaConfirmPassword===''){
      this.alertService.error('Please enter Maharaja Confirm password');
      return;
    }

    if(this.MaharajaConfirmPassword!==this.MaharajanewPassword){
      this.alertService.error('Both Password does not match');
      return;
    }
    let data ={
      UserName:this._StroageService.get(UserStorage.UserName)?.replace('\"','').replace('\"',''),
      Password:this._StroageService.get(UserStorage.Password)?.replace('\"','').replace('\"',''),
      newPassword:this.MaharajanewPassword
    }

    this._ApiService.ChangeMaharajaPassword(data).subscribe(
      (res: any) => {  
        try{
          this.alertService.success(res);
          this.MaharajanewPassword='';
          this.MaharajaConfirmPassword='';
        }catch{
          this.alertService.error(res);
        }
        }, error => {
          this.alertService.error(error);
           
      });


  }
}
