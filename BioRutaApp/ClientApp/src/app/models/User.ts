import { Injectable } from "@angular/core";
import { BaseModel } from "./Base";
import { Role } from "./Role";
@Injectable({
  providedIn: 'root'
})
export class User extends BaseModel {
  Name: string;
  Email: string;
  Password: string;
  RoleId: number;
  Role: Role;
  State: Boolean;

  constructor() {
    super();
    this.Name = "";
    this.Email = "";
    this.Password = "";
    this.RoleId = 0;
    this.Role = new Role();
    this.State = false;
  }
}
