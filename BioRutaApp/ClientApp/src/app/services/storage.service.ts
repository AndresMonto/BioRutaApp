import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private storage: Storage;

  constructor() {
    this.storage = localStorage;
  }

  public GetToken(key: string){
    return this.storage.getItem(key);
  }

  public SetToken(key: string, value: any){
    this.storage.setItem(key, value);
  }
}
