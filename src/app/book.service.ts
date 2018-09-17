import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BookService {

  url = 'https://api.github.com/users/';
  private userName: string= "brynary";
  private clientId;
  private clientSecret;

  constructor(private http: HttpClient ){
    console.log('service');
  }

  getProfile(){
    return this
            .http
            .get(`${this.url + this.userName}`);
        }

  updateProfile(userName: string){
    this.userName= userName;
  }
  
}