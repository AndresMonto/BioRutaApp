
export class BaseModel {
  Id: number;
  Message: string;
  Error: boolean;

  constructor(){
    this.Id = 0;
    this.Message = "";
    this.Error = false;
  }
}
