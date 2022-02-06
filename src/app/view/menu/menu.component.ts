import { Component, Input, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  
})
export class MenuComponent implements OnInit {

  connect: any;
  @Input() clicked = false; // à faire 

  constructor() { }

  ngOnInit() {

    this.connect = sessionStorage.getItem('connected');
  }

  updateUserConnected(data: any) {

    data != "disconnected" ? this.connect = true : this.connect = false;
  }

  toggleInfoBubble(div: any) {

    this.clicked = !this.clicked;
    this.clicked ? div.className = "informationText" : div.className = "informationTextHidden";
  }

}
