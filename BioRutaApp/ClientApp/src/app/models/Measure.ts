import { Injectable } from "@angular/core";
import { BaseModel } from "./Base";
@Injectable({
  providedIn: 'root'
})
export class Measure extends BaseModel {
  Name: string;

  constructor() {
    super();
    this.Name = "";
  }
}
