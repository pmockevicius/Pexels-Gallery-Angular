import { Injectable } from '@angular/core';
import {
  HttpContextToken,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
  


export const IS_PUBLIC_API = new HttpContextToken<boolean>(() => false);

@Injectable()
export class HttpAuthInterceptor implements HttpInterceptor {
  constructor(

  
  ) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    
    const apiKey = environment.appData.apiKey;
    let headers = {};

   headers = req.headers.set('Authorization', apiKey);

 console.log("intercepting")
 return next.handle(req.clone( headers ));

    }
}


