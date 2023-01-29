import { Injectable } from '@angular/core';
import { EncryptService } from './encrypt.service';

@Injectable({
  providedIn: 'root'
})
export class StroageService {

  constructor(private _EncryptService:EncryptService) { }
    put(key:string,value:string){
      localStorage.setItem(key,this._EncryptService.Encrypt(value));
    }

    get(key:string){
      let value= localStorage.getItem(key) || '{}';
      if(value==='{}'  ){
        return null;
      }
     return  this._EncryptService.Decrypt(value);
    }

}
