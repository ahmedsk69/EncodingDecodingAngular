import { Component, OnInit } from '@angular/core';
import { ApiService } from './ApiCallService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  constructor(private _ApiService:ApiService){
  }
  encryptMod: any; 
  
  ngOnInit(): void {
   this.main();
  }
  title = 'EncodingDecodingWeb';
   getMessage(message: any) {
    return message;
  }
 main(){

        var user = {
          "age": 18,
          "name": "tiny"
      };
     var encrypteddata= user;
    //  var encrypteddata= btoa(JSON.stringify(user));
      console.log(encrypteddata);
      var user = {
        "age": 18,
        "name": "tiny"
    };
      
        this._ApiService.GetData(encrypteddata).subscribe(
          (res: any) => {
             console.log(res);
            alert(res);
            }

        )
 }
        


}
