import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppHttpInterceptor } from './app-http-interceptor.service';
import { DatePipe } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ADashboardComponent } from './Admin/dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertComponent } from './component/alert/alert.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ADashboardComponent,
    AlertComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
        provide: HTTP_INTERCEPTORS,useClass: AppHttpInterceptor, multi: true 
    }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
