import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) { }


  getItem(data: any) {
    return this.http.post<any>('http://localhost:3000/api/v1/user', data)
  }


}