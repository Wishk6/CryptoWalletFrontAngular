import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url : string = "https://cryptocrawler.guillaumesaurin.com";
  // url : string = "http://localhost:3000";
  userPseudo : any ; 
  userPnl : any = 0;
  constructor(private http: HttpClient) { }

  getUser(data: any) {
    return this.http.post<any>(this.url +'/api/user', data)
      .pipe(map(user => {
        return user;
      }));
  }

  loginUser(data: any) {
    return this.http.post<any>(this.url +'/api/user/login', data)
      .pipe(map(user => {
        return user;
      }));
  }

  insertUser(data: any) { // for register 
    return this.http.post<any>(this.url +'/api/user/insert', data)
      .pipe(map(user => {
        return user;
      }));;
  }

  updateUser(data: any) { // for color 
    return this.http.post<any>(this.url +'/api/user/update', data)
      .pipe(map(user => {
        return user;
      }));;
  }

  get pseudo() {
    return this.userPseudo;
  }
  set pseudo(data: string) {
      this.userPseudo = data;
  }

  get pnl() {
    return this.userPnl;
  }
  set pnl(data: string) {
      this.userPnl = data;
  }
}
