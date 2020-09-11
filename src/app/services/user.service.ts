import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }


    getUserName() {
      this.http.get('https://localhost:5001/api/User/2')
      .subscribe(resp => {
        console.log(resp);
      });      
    }
}