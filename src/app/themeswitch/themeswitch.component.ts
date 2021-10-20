import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-themeswitch',
  templateUrl: './themeswitch.component.html',
  styleUrls: ['./themeswitch.component.scss']
})
export class ThemeswitchComponent implements OnInit {
  i = 0;
  constructor() { }

  ngOnInit(): void {
  }

  darkModeHandler() {
    if (this.i == 0) { 
      document.documentElement.style.setProperty('--elem', '#1e1e2d');//start
      document.documentElement.style.setProperty('--header', '#1e1e2d');
      document.documentElement.style.setProperty('--elemBackground', '#2c3759');
      document.documentElement.style.setProperty('--shadow', '#2c3759');
      document.documentElement.style.setProperty('--title', 'white');
       this.i++;
    } else {
      document.documentElement.style.setProperty('--elem', 'rgb(77 89 149 / 6%)');
      document.documentElement.style.setProperty('--header', 'white');
      document.documentElement.style.setProperty('--elemBackground', 'white');
      document.documentElement.style.setProperty('--shadow', '#7b7979');
      document.documentElement.style.setProperty('--title', '#383737');


       this.i =0;
    }
}
}
