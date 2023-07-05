import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from '../models/User';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  IsAuth: boolean = false;
  private authSource = new Subject<boolean>();
  public authChange$ = this.authSource.asObservable();

  constructor(private storageService: StorageService) {
    if(this.storageService.GetToken("IsAuth") !== '' && this.storageService.GetToken("AuthUserToken") !== ''){
      this.IsAuth = this.storageService.GetToken("IsAuth") == 'true';
      this.authSource.next(this.IsAuth);
    }
  }

  public GetToken(){
    return this.storageService.GetToken("AuthUserToken");
  }

  public SetToken(value: any){
    this.storageService.SetToken("AuthUserToken", value);
    this.IsAuth = true;
    this.storageService.SetToken("IsAuth", this.IsAuth);
    this.authSource.next(this.IsAuth);
  }

  public SetUserInfo(value: any){
    this.storageService.SetToken("User", JSON.stringify(value));
  }

  public GetUserInfo() : User{
    return JSON.parse(this.storageService.GetToken("User") ?? "{}");
  }

  public ResetToken(){
    this.storageService.SetToken("AuthUserToken", "");
    this.IsAuth = false;
    this.storageService.SetToken("IsAuth", false);
    this.storageService.SetToken("User", "");
    this.authSource.next(this.IsAuth);
  }

  public LogOut(){
    this.ResetToken();
  }
}
