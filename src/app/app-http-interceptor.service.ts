import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse, HttpErrorResponse }   from '@angular/common/http';
import { Injectable } from "@angular/core"
import { Observable, of } from "rxjs";
import { tap, catchError, map } from "rxjs/operators";
@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {
    constructor( ) {}
intercept(
        req: HttpRequest<any>,
        next: HttpHandler
      ): Observable<HttpEvent<any>> {
        if (req.method.toLowerCase() === 'post') {
            var body = btoa(JSON.stringify(req.body))
            req =  req.clone({
                body
            })
        } 
        // req.body =req.body;
        return next.handle(req).pipe(
            
                map(resp => {
                    if (resp instanceof HttpResponse) {
                        var body = atob( resp.body)

                      return  resp.clone({ body:body });
                    }
          
                    return resp;
            }),
            catchError((err: any) => {
                if(err instanceof HttpErrorResponse) {
                    try {
                    } catch(e) {
                    }
                    //log error 
                }
                return of(err);
            }));
    
      }
      
}