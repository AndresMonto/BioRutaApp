import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { DataService } from "../../data.service";
import { SecurityService } from "../../security.service";

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private router: Router, private securityService: SecurityService, private dataService: DataService) { }

  canActivate(): boolean {
    var valid = this.securityService.GetUserInfo().Role.Name == "Administrador";
    if (!valid) {
      this.router.navigate(['/']);
    }
    return valid;
  }
}
