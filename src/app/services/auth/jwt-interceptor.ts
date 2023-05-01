import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { SecurityService } from "../security.service";

@Injectable({
  providedIn: 'root'
})
export class JwtInterceptor implements HttpInterceptor  {

  constructor(private securityService: SecurityService){}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      let token = this.securityService.GetToken();
      if(token){
        req = req.clone({
          setHeaders:{
            Authorization: `Bearer ${token}`
          }
        });
      }
      return next.handle(req);
  }
}

