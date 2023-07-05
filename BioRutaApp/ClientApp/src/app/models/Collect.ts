import { Injectable } from "@angular/core";
import { BaseModel } from "./Base";
import { Collect_State } from "./Collect_State";
import { ProductCollect } from "./ProductCollect";
import { Role } from "./Role";
import { User } from "./User";
@Injectable({
  providedIn: 'root'
})
export class Collect extends BaseModel {
  RegistrationDate: string;
  ClientId: number;
  Client: User;
  StateId: number;
  State: Collect_State;
  CollecterId: number;
  Collecter: User;
  Addres: String;
  ObservationCli: string;
  ObservationRec: string;

  Products: ProductCollect[];

  constructor() {
    super();
    this.RegistrationDate = "";
    this.ClientId = 0;
    this.Client = new User();
    this.StateId = 0;
    this.State = new Collect_State();
    this.CollecterId = 0;
    this.Collecter = new User();
    this.Addres = "";
    this.ObservationCli = "";
    this.ObservationRec = "";
    this.Products = [];
  }
}
