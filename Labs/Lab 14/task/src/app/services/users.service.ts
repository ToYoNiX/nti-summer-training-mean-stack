import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UsersService {
  private apiUrl = "http://localhost:2011/api/users/"
  constructor(private http: HttpClient) { }

  getUsers (): Observable <any> {
    return this.http.get(this.apiUrl)
  }

  getUserByID (id: string): Observable <any> {
    return this.http.get(`${this.apiUrl}${id}`)
  }

  addUser (user: User): Observable <any> {
    return this.http.post(this.apiUrl, user)
  }

  updateUser (id: string, user: any): Observable <any> {
    return this.http.put(`${this.apiUrl}${id}`, user)
  }

  deleteUser (id: string): Observable <any> {
    return this.http.delete(`${this.apiUrl}${id}`)
  }
}

interface User {
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  phone: string,
  dateOfBirth: string,
  gender: string
}
