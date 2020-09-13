import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserModel } from '../models/UserModels';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  _apiUrl;
  constructor(private http: HttpClient) { 
    this._apiUrl=environment.apiEndpoint;
  }

  addUser(user: UserModel) {
    this.http.post(this._apiUrl + 'api/User/adduser', user)
      .subscribe(resp => {
        console.log(resp);
      });
  }

  getUserName() {
    this.http.get(this._apiUrl + 'api/User/2')
      .subscribe(resp => {
        console.log(resp);
      });
  }

  getUsers() {
    return this.http.get(this._apiUrl + 'api/User/users');
  }
}