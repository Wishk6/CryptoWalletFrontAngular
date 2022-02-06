import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-theme-switch',
  templateUrl: './theme-switch.component.html',
  styleUrls: ['./theme-switch.component.scss']
})
export class ThemeSwitchComponent implements OnInit {

  constructor(private userService: UserService) { }
  clicked: any;
  theme: any = 0;

  ngOnInit(): void { // check if user darkmode is true and set this.theme according to it 
    sessionStorage.getItem('connected') !== null ? this.checkUserMode() : console.log("not connected");
  }

  async checkUserMode() {  // get user themeSelected 

    await this.userService.getUser({
      "where": {
        "email": sessionStorage.getItem('email')
      },
      "only": ["themeSelected"]
    })
      .subscribe((res) => {
        res[0].themeSelected == 0 ? this.theme = 0 : this.theme = 1;
        this.darkModeHandler();
      }, err => {
        console.log(err.error)
      });
  }

  changeUserMode() { // launch on click, change user mod in db 

    if (sessionStorage.getItem('connected') !== null) {

      if (this.theme == 0) {

        this.userService.updateUser({

          where: {
            "email": sessionStorage.getItem('email')
          },
          update: {
            themeSelected: 1
          }
        }).subscribe((res) => {
          this.theme = 1;
          this.darkModeHandler();
        }, err => {
          console.log(err.error)
        });

      } else {
        this.userService.updateUser({

          where: {
            "email": sessionStorage.getItem('email')
          },
          update: {
            themeSelected: 0
          }
        }).subscribe((res) => {
          this.theme = 0;
          this.darkModeHandler();
        }, err => {
          console.log(err.error);
        });
      }

    } else {
      this.theme == 0 ? this.theme = 1 : this.theme = 0;
      this.darkModeHandler();
    }
  }

  darkModeHandler() {
    if (this.theme == 0) {
      document.documentElement.style.setProperty('--footer', '#69b6ed');
      document.documentElement.style.setProperty('--elem', 'rgb(77 89 149 / 6%)');
      document.documentElement.style.setProperty('--header', 'white');
      document.documentElement.style.setProperty('--elemBackground', 'white');
      document.documentElement.style.setProperty('--shadow', '#7b7979');
      document.documentElement.style.setProperty('--title', '#383737');
      document.documentElement.style.setProperty('--text', '#4592de');
      document.documentElement.style.setProperty('--button', '#E1F0FF');
      document.documentElement.style.setProperty('--boxTitleColor', '#8bcddf');
      document.documentElement.style.setProperty('--boxGridColor', 'white');
      document.documentElement.style.setProperty('--border', '#4592e16b');
    } else {  // dark mode 
      document.documentElement.style.setProperty('--footer', '#282828');
      document.documentElement.style.setProperty('--elem', '#0d0d0d');
      document.documentElement.style.setProperty('--header', '#1c2025');
      document.documentElement.style.setProperty('--elemBackground', '#48494a');
      document.documentElement.style.setProperty('--shadow', 'black');
      document.documentElement.style.setProperty('--title', 'white');
      document.documentElement.style.setProperty('--text', 'white');
      document.documentElement.style.setProperty('--button', '#596a7a');
      document.documentElement.style.setProperty('--boxTitleColor', '#282828');
      document.documentElement.style.setProperty('--boxGridColor', '#5f5f5f');
      document.documentElement.style.setProperty('--border', 'white');
    }
  }
}

