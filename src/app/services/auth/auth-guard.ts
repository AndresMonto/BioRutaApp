import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { DataService } from "../data.service";
import { SecurityService } from "../security.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private securityService: SecurityService, private dataService: DataService){}

  canActivate(): boolean {
    if(this.securityService.IsAuth){
      return true;
    }else{
      this.router.navigate(["/login"]);
    }
    return false;
  }


}
