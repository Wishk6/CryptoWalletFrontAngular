import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  userConnected: any;
  user : any;
  constructor() { }

  async ngOnInit() {
    //  this.user = await this.objectUser.getItem({}).toPromise( );

  }
}
