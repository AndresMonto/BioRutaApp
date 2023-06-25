import { Injectable } from "@angular/core";
import { BaseModel } from "./Base";
@Injectable({
  providedIn: 'root'
})
export class Role extends BaseModel {
  Name: string;

  constructor() {
    super();
    this.Name = "";
  }
}
