import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-themeswitch',
  templateUrl: './themeswitch.component.html',
  styleUrls: ['./themeswitch.component.scss']
})
export class ThemeswitchComponent implements OnInit {

  constructor(private userService: UserService, private cookieService: CookieService) { }
  theme: any;

  ngOnInit(): void {
    this.checkCookie();
  }


  // faire en sorte de récuperer l'actual user  pour pouvoir check sa 
  async checkCookie() {
    await this.userService.getUser({
      where: {
        "email": "root"
      },
    })
      .subscribe((res) => {
        if (res[0].themeSelected == 0) {
          this.theme = 'light';
          return true;
        } else {
          this.theme = 'dark';
          return false
        }
      }, err => {
        console.log(err);
        return false;
      });
  }

  darkModeHandler() {
    if (this.theme == 'light') {
      document.documentElement.style.setProperty('--elem', 'black');// dark mode 
      document.documentElement.style.setProperty('--header', '#1c2025');
      document.documentElement.style.setProperty('--elemBackground', '#2c3759');
      document.documentElement.style.setProperty('--shadow', 'black');
      document.documentElement.style.setProperty('--title', 'white');
      document.documentElement.style.setProperty('--text', 'grey');
      this.theme = 'dark';
    } else {
      document.documentElement.style.setProperty('--elem', 'rgb(77 89 149 / 6%)');
      document.documentElement.style.setProperty('--header', 'white');
      document.documentElement.style.setProperty('--elemBackground', 'white');
      document.documentElement.style.setProperty('--shadow', '#7b7979');
      document.documentElement.style.setProperty('--title', '#383737');
      document.documentElement.style.setProperty('--text', '#4592de');
      this.theme = 'light';
    }
  }
}

