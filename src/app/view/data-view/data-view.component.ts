import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-view',
  templateUrl: './data-view.component.html',
  styleUrls: ['./data-view.component.scss']
})
export class DataViewComponent implements OnInit {
  connected: any;

  constructor() { }

  ngOnInit(): void {
    this.connected = sessionStorage.getItem('connected');
  }

  updateUserConnected(data: any) {

    data != "disconnected" ? this.connected = true : this.connected = false; // if user deco emit disconencted in header cp and send it to data view 
  }
}
