import { Injectable } from "@angular/core";
import { BaseModel } from "./Base";

@Injectable({
  providedIn: 'root'
})
export class Login extends BaseModel {
  Email: string;
  Password: string;
  Token: string;

  constructor(){
    super();
    this.Email = "";
    this.Password = "";
    this.Token = "";
  }
}
