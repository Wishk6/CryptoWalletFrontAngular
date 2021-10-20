import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlertService } from '../alert.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  email: any;
  mdp: any;
  userConnected = true;
  constructor(private http: HttpClient, private alert: AlertService) { }

  ngOnInit(): void {
  }


  loginFunc() {
    this.http.post<any>('http://localhost:3000/api/v1/user/login', { email: this.email, mdp: this.mdp })
      .subscribe((response) => {
        if (response) {
          alert(response[0].pseudo)
        }
      }, err => this.alert.error(err.error)
      );
  }

  SignUpFunc() {
    this.http.post<any>('http://localhost:3000/api/v1/user/insert', { email: this.email, mdp: this.mdp })
      .subscribe((response) => {
        if (response) {
          alert(response[0].pseudo)
        }
      }, err => this.alert.error(err.error)
      );
  }
}
