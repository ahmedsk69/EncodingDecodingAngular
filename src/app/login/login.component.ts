import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../ApiCallService';
import { UserStorage } from '../model/enum';
import { AlertService } from '../service/alert.service';
import { EncryptService } from '../service/encrypt.service';
import { StroageService } from '../service/stroage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  form!: FormGroup;
    loading = false;
    submitted = false;

    
    constructor(
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private _EncryptService:EncryptService,
      private _ApiService: ApiService,
      private alertService: AlertService,
      private _StroageService:StroageService
  ) { }
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });
  }
  get f() { return this.form.controls; }

  onSubmit() {
    this.submitted = true;

    // reset alerts on submit
    this.alertService.clear();

    // stop here if form is invalid
    if (this.form.invalid) {
        return;
    }

    // this.loading = true;

    let data1 ={
      UserName:this.f.username.value,
      Password:this.f.password.value
    }

    this._ApiService.Login(data1).subscribe(
      (res: any) => {
        this._StroageService.put(UserStorage.UserName,this.f.username.value);
        this._StroageService.put(UserStorage.Password,this.f.password.value);
        this.router.navigateByUrl(res);
        }, error => {
          this.alertService.error(error);
          this.loading = false;
      }

    )
   
}
}
