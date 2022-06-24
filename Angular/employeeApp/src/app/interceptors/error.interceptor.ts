import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { HotToastService } from '@ngneat/hot-toast';
import { Router } from '@angular/router';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private toast: HotToastService, private router: Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    return next.handle(request).pipe(
      catchError((err:HttpErrorResponse)=> {
        if(err.status == 403){ 
          this.toast.error('Session Expired. Please Login Again!') 
          sessionStorage.clear()
          this.router.navigate(['/']) 
        }
        throw err
      })
    );
  }
}
