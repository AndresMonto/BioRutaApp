import { Injectable } from "@angular/core";
import { BaseModel } from "./Base";
import { Collect_State } from "./Collect_State";
import { Role } from "./Role";
import { User } from "./User";
@Injectable({
  providedIn: 'root'
})
export class Collect extends BaseModel {
  RegistrationDate: Date;
  ClientId: number;
  Client: User;
  StateId: number;
  State: Collect_State;
  ObservationCli: string;
  ObservationRec: string;

  constructor() {
    super();
    this.RegistrationDate = new Date();
    this.ClientId = 0;
    this.Client = new User();
    this.StateId = 0;
    this.State = new Collect_State();
    this.ObservationCli = "";
    this.ObservationRec = "";
  }
}
