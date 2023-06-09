import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SecurityService } from './security.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string, private securityService : SecurityService) { }

  public get<T>(url: string, params?: HttpParams) : Observable<T> {

    let httpHeader: HttpHeaders =  this.GetHeaders();

    return this.http.get<T>(this.baseUrl + url, {
      headers: httpHeader,
      params: params
    });
  }

  public post<T>(url: string, data: any) : Observable<T> {

    let httpHeader: HttpHeaders =  this.GetHeaders();

    return this.http.post<T>(this.baseUrl + url, data , {
      headers: httpHeader,
    });
  }

  public put<T>(url: string, data: any) : Observable<T> {

    let httpHeader: HttpHeaders =  this.GetHeaders();

    return this.http.put<T>(this.baseUrl + url, data , {
      headers: httpHeader,
    });
  }

  public delete<T>(url: string, params?: HttpParams) : Observable<T> {

    let httpHeader: HttpHeaders =  this.GetHeaders();

    return this.http.delete<T>(this.baseUrl + url, {
      headers: httpHeader,
      params: params
    });
  }

  private GetHeaders() : HttpHeaders{
    let httpHeaders: HttpHeaders = new HttpHeaders();
    // let token = this.securityService.GetToken();
    // if(token){
    //   httpHeaders = httpHeaders.append("Authorization", "Bearer " + token);
    // }
    return httpHeaders;
  }
}
