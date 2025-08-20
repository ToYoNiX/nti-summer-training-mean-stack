import { Component } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  constructor(private userService: UsersService) {}

  students: any[] = []
  student: User = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
    dateOfBirth: "",
    gender: ""
  }
  ngOnInit() {
    this.userService.getUsers().subscribe((data) => {
      this.students = data
    })
  }

  deleteUser (id: string) {
    this.userService.deleteUser(id).subscribe(() => {
      this.students = this.students.filter((s) => s._id != id)
    })
  }

  addUser (user: User) {
    this.userService.addUser(user).subscribe((user) => {
      this.students.push(user)
    })
  }
}

interface User {
  _id?: string,
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  phone: string,
  dateOfBirth: string,
  gender: string
}
