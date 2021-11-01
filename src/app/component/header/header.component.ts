import { Component, OnInit, Input } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { NotificationService } from 'src/app/service/notification.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  email: any;
  mdp: any;
  @Input() userConnected: any;
  constructor(private userService: UserService, private notificationService: NotificationService, private cookieService: CookieService) { } // alert services in header 


  ngOnInit(): void {
    this.checkCookie();
  }

  checkCookie() {
    this.cookieService.get('userConnected') == 'true' ? this.userConnected = true : this.userConnected = false;
  }

  async signInFunc() {
    await this.userService.loginUser({ email: this.email, mdp: this.mdp })
      .subscribe((res) => {
        this.userConnected = true;
        this.cookieService.set("userConnected", 'true');
       this.notificationService.showSuccess('Hello ' + res[0].pseudo);
      }, err => {
       this.notificationService.showError('Please retry identification');
      });
  }

  signOutFunc() {
    this.userConnected = false;
    this.cookieService.set("userConnected", 'false');
    this.notificationService.showInfo("Bye Bye");
  }

  signUpFunc() {
    //   this.http.post<any>('http://localhost:3000/api/v1/user', {})
    //     .subscribe((response) => {
    //       if (response) {
    //         (response[0].email);

    //         this.http.post<any>('http://localhost:3000/api/v1/user/insert', { email: this.email, mdp: this.mdp })
    //           .subscribe((response) => {
    //             if (response) {
    //               console.log(response[0].pseudo);
    //             }
    //           }, err => console.log(err)
    //           );
    //       }
    //     }, err => console.log(err)
    //     );
  }
}
