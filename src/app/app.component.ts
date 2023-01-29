import { Component, OnInit } from '@angular/core';
import { ApiService } from './ApiCallService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent   {
  constructor(private _ApiService:ApiService){
    // localStorage.clear();
  }
  encryptMod: any; 
  user?: any;
  
  title = 'EncodingDecodingWeb';
   getMessage(message: any) {
    return message;
  }
 
        


}
