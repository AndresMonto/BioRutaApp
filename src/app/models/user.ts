import { Injectable } from "@angular/core";
import { BaseModel } from "./base";
@Injectable({
  providedIn: 'root'
})
export class User extends BaseModel {
  Name: string;
  Email: string;
  Password: string;
  RoleId: number;

  constructor() {
    super();
    this.Name = "";
    this.Email = "";
    this.Password = "";
    this.RoleId = 0;
  }
}
