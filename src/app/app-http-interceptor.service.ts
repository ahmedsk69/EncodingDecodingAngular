import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse, HttpErrorResponse }   from '@angular/common/http';
import { Injectable } from "@angular/core"
import { Observable, of } from "rxjs";
import { tap, catchError, map } from "rxjs/operators";
import { AlertService } from './service/alert.service';
import { EncryptService } from './service/encrypt.service';
@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {
    constructor(private _EncryptService:EncryptService,
        private alertService: AlertService, ) {}
intercept(
        req: HttpRequest<any>,
        next: HttpHandler
      ): Observable<HttpEvent<any>> {
        if (req.method.toLowerCase() === 'post') {
            var body =this._EncryptService.Encrypt(req.body);   
            req =  req.clone({
                body
            })
        } 
        // req.body =req.body;
        return next.handle(req).pipe(
                map(resp => {
                    if (resp instanceof HttpResponse) {
                        var body = this._EncryptService.Decrypt ( resp.body);

                      return  resp.clone({ body:body });
                    }
          
                    return resp;
            }),
            catchError((err: any) => {
                if(err instanceof HttpErrorResponse) {
                    try {
                        
          this.alertService.error( this._EncryptService.Decrypt ( err.error));
                    } catch(e) {
                    }
                    //log error 
                }
                return of(err);
            }));
    
      }
      
}