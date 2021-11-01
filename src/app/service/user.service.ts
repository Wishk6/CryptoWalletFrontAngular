import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  
  getUser(data :any) {
    return this.http.post<any>('http://localhost:3000/api/v1/user', {data})

  }

  loginUser(data: any) {
    return this.http.post<any>('http://localhost:3000/api/v1/user/login', data)
      .pipe(map(user => {
        return user;
      }));
  }

  insertUser(data: any) { // for register 
    return this.http.post<any>('http://localhost:3000/api/v1/user/insert', data)
      .pipe(map(user => {
        return user;
      }));;
  }

  updateUser(data: any) { // for color 
    return this.http.post<any>('http://localhost:3000/api/v1/user/update', data)
      .pipe(map(user => {
        return user;
      }));;
  }
}
