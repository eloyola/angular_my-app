import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { UserModel } from '../../models/UserModels';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  myForm: FormGroup;
  flag = false;
  users: any[] = [];

  constructor(private userService: UserService, private fb: FormBuilder,
    private toastr: ToastrService) {

    //userService.getUserName();
  }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      Email: [''],
      Name: [''],
      LastName: [''],
      date: [''],
      telefonos: this.fb.array([this.fb.group({telefono: ['']})])
    });
  }

  showSuccess(){
    this.toastr.success('Hello world', 'Toastr fun!');
    this.toastr.error('Hello world', 'Toastr Error!');
  }

  onSubmit(formValue: any) {
    const user = new UserModel();
    user.Name = formValue.Name;
    user.LastName = formValue.LastName;
    user.Email = formValue.Email;
    user.date = new Date(formValue.date.year, formValue.date.month-1, formValue.date.day);
    user.telefonos = formValue.telefonos;
    this.userService.addUser(user);

    this.flag = !this.flag;
    this.userService.getUsers()
      .subscribe((resp: any) => {
        this.users = resp;
        this.showSuccess();
      });
  }

  addTelefono(){
    const control = <FormArray>this.myForm.controls['telefonos'];
    control.push(this.fb.group({telefono: []}));
  }

  removeTelefono(index: number){
    const control = <FormArray>this.myForm.controls['telefonos'];
    control.removeAt(index);
  }

  get getPhones() {
    return this.myForm.get('telefonos') as FormArray;
  }
}
