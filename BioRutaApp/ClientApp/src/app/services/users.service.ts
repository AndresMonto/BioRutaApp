import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../models/login';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  Registrar() {
    this.http.get<User[]>(this.baseUrl + 'weatherforecast').subscribe(result => {
    }, error => console.error(error));
  }

  // public CreateUser(user: User) : Observable<User> {
  //   return this.http.post<User>(this.baseUrl + 'weatherforecast/api/CraeteUser', user);
  // }

  // public SigIn(user: Login) : Observable<Login> {
  //   return this.http.post<Login>(this.baseUrl + 'weatherforecast/api/SignIn', user);
  // }
}
