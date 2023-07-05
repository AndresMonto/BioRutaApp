import { Injectable } from "@angular/core";
import { BaseModel } from "./Base";
@Injectable({
  providedIn: 'root'
})
export class Collect_State extends BaseModel {
  Name: string;

  constructor() {
    super();
    this.Name = "";
  }
}
