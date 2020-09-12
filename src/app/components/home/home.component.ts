import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { UserModel } from '../../models/UserModels';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  myForm: FormGroup;
  flag = false;
  users: any[] = [];

  constructor(private userService: UserService, private fb: FormBuilder) {

    //userService.getUserName();
  }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      Email: [''],
      Name: [''],
      LastName: ['']
    });

  }

  onSubmit(formValue: any) {
    const user = new UserModel();
    user.Name = formValue.Name;
    user.LastName = formValue.LastName;
    user.Email = formValue.Email;
    this.userService.addUser(user);

    this.flag = !this.flag;
    this.userService.getUsers()
      .subscribe((resp: any) => {
        this.users = resp;
      });
  }
}
