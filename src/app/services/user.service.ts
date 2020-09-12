import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { UserModel } from '../models/UserModels';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

    addUser(user: UserModel){
      const data = new UserModel();
      data.Name = user.Name;
      data.LastName = user.LastName;
      data.Email = user.Email;

      this.http.post('https://localhost:5001/api/User/adduser', data)
      .subscribe(resp=>{
        console.log(resp);
      });
    }

    getUserName() {
      this.http.get('https://localhost:5001/api/User/2')
      .subscribe(resp => {
        console.log(resp);
      });      
    }

    getUsers() {
      return this.http.get('https://localhost:5001/api/User/users');    
    }
}