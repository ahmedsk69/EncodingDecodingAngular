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
export class UDashboardComponent implements OnInit {

  
  MaharajaPassword:string='';
  constructor(private _StroageService:StroageService,
    private _ApiService:ApiService,
    private alertService: AlertService,
    private router: Router) { }

    ngOnInit(): void { 
      if(this._StroageService.get(UserStorage.UserName)===null || this._StroageService.get(UserStorage.UserName)===undefined  ){
        this.router.navigateByUrl('');
      }
    }

  GetMaharajaPassword(){
      
    this.alertService.clear();
    let data ={
      UserName:this._StroageService.get(UserStorage.UserName)?.replace('\"','').replace('\"',''),
      Password:this._StroageService.get(UserStorage.Password)?.replace('\"','').replace('\"','')
    }

    this._ApiService.GetMaharajaPasswordUser(data).subscribe(
      (res: any) => {  
        try{
          let temp =JSON.parse(res);
          this.MaharajaPassword=temp.maharajaPassword;
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
}
