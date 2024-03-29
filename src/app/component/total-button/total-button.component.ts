import { Component, OnInit, Input } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-total-button',
  templateUrl: './total-button.component.html',
  styleUrls: ['./total-button.component.scss']
})
export class TotalButtonComponent implements OnInit {
  newSum = '0';
  showOrHide = "Afficher votre PNL";
  updated = true;
  @Input() sum: any;

  constructor(private userSerivce: UserService) { }

  ngOnInit(): void {
    console.log(this.userSerivce.userPnl);
    this.userSerivce.userPnl == 0 ?
      this.waitingFunc() :
      this.sum = this.userSerivce.userPnl;   //check si pnl dans userServ
  }

  waitingFunc() { // wait le sum 
    if (this.sum != undefined) {
      return this.showOrHide;
    } else {
      return "...";
    }
  }


  showSumInHeader() {
    this.sum != null ? this.newSum = this.sum.toString() + " $" : console.log("wait data to be loaded");
    if (this.updated == true) {
      this.showOrHide = "Cacher votre PNL";
      this.updated = false;
    } else {
      this.showOrHide = " Afficher votre PNL";
      this.updated = true;
    }
  }
}
