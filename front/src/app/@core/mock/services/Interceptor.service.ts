import { Injectable } from '@angular/core';
import {
  HttpResponse,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { EMPTY, Observable, pipe, throwError } from 'rxjs';
import { LoaderService } from './loader.service';
import { catchError, concatMap, delay, filter, finalize, mergeMap, retry, retryWhen, takeWhile } from 'rxjs/operators';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from '../../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class InterceptorService {


    private requests: HttpRequest<any>[] = [];
    private errors: number = 0;
    constructor(private _snackBar: MatSnackBar,private loaderService: LoaderService, private router : Router) { }
  
    removeRequest(req: HttpRequest<any>) {
      const i = this.requests.indexOf(req);
      if (i >= 0) {
        this.requests.splice(i, 1);
      }
      setTimeout(() => {
        this.loaderService.isLoading.next(this.requests.length > 0);
      }, 400);
    }

    openSnackBar(message: string, action: string) {
        this._snackBar.open(message, action, {
          duration: 4000,
          horizontalPosition: 'center',
          verticalPosition: 'top'
        });
      }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  
      this.requests.push(req);
      this.loaderService.isLoading.next(this.requests.length > 0);
      return Observable.create(observer => {
        const subscription = next.handle(req)
        .pipe(catchError(err => {
          ++this.errors;
        //   ((this.errors <= 5) && (err.status != 500) && (err.status != 501) && (err.status != 401))? this.errors = 0 : '';
            if(err.status == 401){
                this.errors = 5;
                this.removeRequest(req);
                observer.complete();
                this.openSnackBar(err.error.error,'Fechar')
            }
            if(err.status == 501 || err.status == 500){
                this.errors = 5;
                this.openSnackBar(err.error.error,'Fechar')
                console.log(err)
                this.removeRequest(req);
                observer.complete();
            }
            if(err.status == 400){
                this.errors = 5;
                this.openSnackBar(err.error.error,'Fechar')
                console.log(err)
                this.removeRequest(req);
                observer.complete();
            }
            if(err.status == 409){
                this.errors = 5;
                this.openSnackBar(err.error.error,'Fechar')
                console.log(err)
                this.removeRequest(req);
                observer.complete();
            }
            if(err.status == 404){
                this.openSnackBar(err.error.error,'Fechar')
                this.removeRequest(req);
                observer.complete();
            }

            // console.log('Houve um erro ao fazer o pedido, tentando novamente!')
            return throwError(err);
        }),
            retryWhen(errors => {return errors.pipe(takeWhile(val => (this.errors < 1 && val.status != 400)||(this.errors < 5 && val.status !== 404) || (this.errors < 5 && val.status == 500) , true ),delay(1000))})
            )
          .subscribe(
            event => {
              if (event instanceof HttpResponse) {
                this.removeRequest(req);
                observer.next(event);
              }
            },
            err => {
              this.removeRequest(req);
              observer.error(err);
            },
            () => {
              this.removeRequest(req);
              observer.complete();
            });
        // remove request from queue when cancelled
        return () => {
          this.removeRequest(req);
          subscription.unsubscribe();
        };
      });
    }
}
