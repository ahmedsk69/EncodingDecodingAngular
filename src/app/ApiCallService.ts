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

  
  GetData(data:any) {
    var newdata ={
      data:data
    }
    return this.http.post(this.BaseURI + 'WeatherForecast/Hello',data);
  }
}