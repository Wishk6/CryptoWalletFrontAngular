import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
userConnected = false;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }


 dataFunc() {
     
  }
}
