import { Injectable } from "@angular/core";
import { BaseModel } from "./Base";
import { Measure } from "./Measure";
import { Product } from "./Product";
@Injectable({
  providedIn: 'root'
})
export class ProductCollect extends BaseModel {
  Product: Product;
  Amount: number;
  Measure: Measure;

  constructor() {
    super();
    this.Product = new Product();
    this.Amount = 0;
    this.Measure = new Measure();
  }
}
