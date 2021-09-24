import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-total-button',
  templateUrl: './total-button.component.html',
  styleUrls: ['./total-button.component.scss']
})
export class TotalButtonComponent implements OnInit {
  newSum = '0';
  showOrHide = "Show your theoric wallet value";
  updated = true;
  actualMode = "Dark Mode";
  checkDark = true;
  @Input() sum: any;
  r = document.querySelector(':root');
  constructor() { }

  ngOnInit(): void {
  }
  trainingFunc() {
    if (this.sum != undefined) {
      return this.showOrHide;
    } else {
      return "...";
    }
  }

  darkModeHandler() {
  
  
  // this.r.style.setProperty('--color', 'red');


  }

  launchSumInHeader() {
    
    this.sum != null ? this.newSum = this.sum.toString() + " $" : console.log("wait data to be loaded");
    if (this.updated == true) {
      this.showOrHide = "Hide your theoric wallet value";
      this.updated = false;
    } else {
      this.showOrHide = "Show your theoric wallet value";
      this.updated = true;
    }
  }
}
