import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Alert, AlertOptions, AlertType } from '../model/alert';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  private subject = new Subject<Alert>();
  private defaultId = 'default-alert';

  // enable subscribing to alerts observable
  onAlert(id = this.defaultId): Observable<Alert> {
      return this.subject.asObservable().pipe(filter(x => x && x.id === id));
  }

  // convenience methods
  success(message: string, options?: AlertOptions) {
    Swal.fire({title:'Admin Panel',text:message,background:'#90EE90',color:'black'});
    //   this.alert(new Alert({ ...options, type: AlertType.Success, message }));
  }

  error(message: string, options?: AlertOptions) {
    Swal.fire({title:'Admin Panel',text:message,background:'#FFCCCB',color:'black'});
    //   this.alert(new Alert({ ...options, type: AlertType.Error, message }));
  }

  info(message: string, options?: AlertOptions) {
    Swal.fire({title:'Admin Panel',text:message,background:'white',color:'black'});
    //   this.alert(new Alert({ ...options, type: AlertType.Info, message }));
  }

  warn(message: string, options?: AlertOptions) {
    Swal.fire({title:'Admin Panel',text:message,background:'#FFD580',color:'black'});
    //   this.alert(new Alert({ ...options, type: AlertType.Warning, message }));
  }

  // main alert method    
  alert(alert: Alert) {
      alert.id = alert.id || this.defaultId;
      this.subject.next(alert);
  }

  // clear alerts
  clear(id = this.defaultId) {
      this.subject.next(new Alert({ id }));
  }
}
