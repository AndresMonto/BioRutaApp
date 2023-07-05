import { Injectable } from "@angular/core";
import { BaseModel } from "./Base";
@Injectable({
  providedIn: 'root'
})
export class Product extends BaseModel {
  Name: string;
  Score: number;
  State: Boolean;

  constructor() {
    super();
    this.Name = "";
    this.Score = 0;
    this.State = false;
  }
}
